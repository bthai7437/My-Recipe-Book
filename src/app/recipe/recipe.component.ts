import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodDataService } from '../food-data.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  apiUrl = 'http://localhost:3000/';
  parseFoods: Food[] = [];
  breakFoods: Food[] = [];
  lunchFoods: Food[] = [];
  dinnerFoods: Food[] = [];
  dessertFoods: Food[] = [];

  breakfast: Food = new Food();
  lunch: Food = new Food();
  dinner: Food = new Food();
  dessert: Food = new Food();

  foodsLoaded: Promise<boolean>;

  constructor(private foodService: FoodDataService) { }

  ngOnInit() {
      this.foodService.getFoods().subscribe((data) => {
        this.parseFoods = data;
        const resources = data["foods"];
        for(let i=0;i<resources.length;i++){
          this.parseToFood(resources[i]);
        }
        this.foodsLoaded = Promise.resolve(true);
      });
    }

 parseToFood(resource) {
  let food  = {} as Food;
  food.title = resource["title"];
  food.type = resource["type"];
  food.ingredients = resource["ingredients"];
  food.qty = resource["qty"];
  food.foodImage = this.apiUrl + resource["foodImage"];

  this.sortFoodType(food);

 }

 sortFoodType(currFood: Food) {
  switch (currFood.type) {
    case 'breakfast': {
      if (this.breakFoods.length === 0) {
        this.breakfast = currFood;
      }
      this.breakFoods.push(currFood);
      break;
    }
    case 'lunch': {
      if (this.lunchFoods.length === 0) {
        this.lunch = currFood;
      }
      this.lunchFoods.push(currFood);
      break;
    }
    case 'dinner': {
      if (this.dinnerFoods.length === 0) {
        this.dinner = currFood;
      }
      this.dinnerFoods.push(currFood);
      break;
    }
    case 'dessert': {
      if (this.dessertFoods.length === 0) {
        this.dessert = currFood;
      }
      this.dessertFoods.push(currFood);
      break;
    }
  }
 }
}
