import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/models/Food';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  // private cart : Cart = new Cart();
  private cart : Cart = this.getCartFromLocalStorage();
  private cartSubject : BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  addToCart (food : Food) {
    let cartItem = this.cart.items.find(item => item.food.id == food.id);

    if(cartItem) return;
    this.cart.items.push(new CartItem(food));
    this.setCartToLocalStorage();
  }

  removeFromCart (foodId : string) {
    this.cart.items = this.cart.items.filter((item:any) => item.food.id != foodId);
    this.setCartToLocalStorage();

  };

  changeQuality(foodId : string, quantity : number){
    let cartItem : any = this.cart.items.find(item => item.food.id == foodId);
    if(cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    this.setCartToLocalStorage();
  }

  clearCart(){
    this.cart = new Cart();
  }

  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage():void {
    this.cart.totalPrice = this.cart.items.reduce((prevSum : any, currentItem:any)=> prevSum + currentItem.price,0)
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem("Cart",cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage():Cart{
    const cartJson = localStorage.getItem('Cart')
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}
