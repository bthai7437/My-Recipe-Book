import { Component, OnInit, Input } from '@angular/core';
import { Food } from '../food';
import { FoodDataService } from '../food-data.service';


@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  @Input() foods: Food[];
  food: Food = new Food();
  apiUrl = 'http://localhost:3000/';
  foodImage: any;
  foodArr: Food[] = [];
  index = 0;


  constructor() {
  }

  ngOnInit() {
    this.setFood(this.index); // set initial food
  }

  getNextFood() {
     // if index + 1 is out of bounds
    if (this.index + 2 > this.foods.length) {
      this.index = 0;
    } else {
      this.index++;
    }
    console.log(this.index);
    this.setFood(this.index);
    }

  setFood(index: number) {
    this.food.title = this.foods[index].title;
    this.food.qty = this.foods[index].qty;
    this.food.ingredients = this.foods[index].ingredients;
    this.food.foodImage = this.foods[index].foodImage;
  }

}
