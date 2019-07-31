import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodDataService } from '../food-data.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  parseFoods: Food[] = [];
  breakfastFood: Food[] = [];
  lunchFood: Food[] = [];
  dinnerFood: Food[] = [];
  desertFood: Food[] = [];

  constructor(private foodService: FoodDataService) { }

  ngOnInit() {
      this.foodService.getFoods().subscribe((data) => {
        this.parseFoods = data;
        let resources = data["foods"];
        for(var i=0;i<resources.length;i++){
          this.parseToFood(resources[i]);
        }
      });
  }

 parseToFood(resource) {
  let food  = {} as Food;
  food.title = resource["title"];
  food.type = resource["type"];
  food.ingredients = resource["ingredients"];
  food.qty = resource["qty"];
  food.foodImage = resource["foodImage"];
  this.sortFoods(food);
 }

 sortFoods(food: Food) {
   switch(food.type) {
    case 'breakfast': {
      this.breakfastFood.push(food);
      break;
    }
    case 'lunch': {
      this.lunchFood.push(food);
      break;
    }
    case 'dinner': {
      this.lunchFood.push(food);
      break;
    }
    case 'dessert': {
      this.lunchFood.push(food);
      break;
    }
    default: {
      console.log('Food does not have the correct type');
      break;
   }

   }
  }
}
