import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule, CurrencyPipe, NgFor } from '@angular/common';
import { RatingModule } from 'ng-starrating';
import 'zone.js';
import { StarRatingModule } from 'angular-star-rating';
import { SearchComponent } from '../../partials/search/search.component';
import { TagsComponent } from '../../partials/tags/tags.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,NgFor,RouterLink,StarRatingModule,CurrencyPipe, SearchComponent,TagsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  foods: Food[] = [];

  constructor( private foodService : FoodService, activatedRoute : ActivatedRoute){
    activatedRoute.params.subscribe((params) => {
      if(params['searchTerm']) this.foods = this.foodService.getAllFoodsSearchTem(params['searchTerm']);
      else if(params['tag']) this.foods = this.foodService.getAllFoodByTag(params['tag'])
      else this.foods = this.foodService.getAll();
    })
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
