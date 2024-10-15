import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../shared/models/Cart';
import { CartService } from '../../../services/cart.service';
import { Food } from '../../../shared/models/Food';
import { TitleComponent } from '../../partials/title/title.component';

@Component({
  selector: 'app-cart-page-component',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './cart-page-component.component.html',
  styleUrl: './cart-page-component.component.scss'
})
export class CartPageComponentComponent implements OnInit{

  cart!:Cart;

  constructor(private cartService :  CartService){
    this.cartService.getCartObservable().subscribe((cart)=> this.cart = cart)
  }

  ngOnInit():void{

  }

  addToCart (food : Food) {
    this.cartService.addToCart(food);
  }

  removeFromCart (foodId : string) {
    this.cartService.removeFromCart(foodId)
  };

  changeQuality(foodId : string, quantityInString : string){
    const quantity = parseInt(quantityInString)
    this.cartService.changeQuality(foodId,quantity);
  }

  clearCart(){
    this.cartService.clearCart();
  }

}
