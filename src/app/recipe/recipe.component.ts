import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodDataService } from '../food-data.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  foods: Food[] = [];
  parseFoods: Food[] = [];

  constructor(private foodService: FoodDataService) { }

  ngOnInit() {
      this.foodService.getFoods().subscribe((data) => {
        this.foods = data;
        let resources = data["foods"];
        for(var i=0;i<resources.length;i++){
          this.parseToFood(resources[i]);
        }
      });
  }

 parseToFood(resource) {
  let food  = {} as Food;
  food.title = resource["title"];
  food.ingredients = resource["ingredients"];
  food.qty = resource["qty"];
  food.foodImage = resource["foodImage"];
  
  console.log(food.title);
  console.log(food.ingredients);
  console.log(food.qty);
  console.log(food.foodImage);

  this.parseFoods.push(food);
 }
}
