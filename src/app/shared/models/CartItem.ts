import { Food } from "./Food"

export class CartItem {

    constructor (public food : Food) {

    }
    // food !: Food;
    quantity : number = 1;
    pprice : number = this.food.price
}