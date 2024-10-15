import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [JsonPipe,RouterLink,CurrencyPipe],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.scss'
})
export class FoodPageComponent {

  food!: Food;
  constructor(activatedRoute : ActivatedRoute, foodService : FoodService, private cartService : CartService, private router : Router){
    activatedRoute.params.subscribe((Params) => {
      if(Params['id']) this.food = foodService.getFoodById(Params['id'])
    })
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
