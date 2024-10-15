import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods, sample_tags } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return sample_foods;
  }

  getAllFoodsSearchTem(searchTerm:string){
    return this.getAll().filter( food => food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
  }

  getAllTags(){
    return sample_tags
  }

  getAllFoodByTag(tag:string){
    return tag === 'All' ? this.getAll() : this.getAll().filter( (food:any) => food?.tags.includes(tag))
  }

  getFoodById(foodId:string){
    return this.getAll().find(food => food.id == foodId) ?? new Food()
  }
}
