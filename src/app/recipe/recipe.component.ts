import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodDataService } from '../food-data.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  foods: any = [];
  food: Food;

  constructor(private foodService: FoodDataService) { }

  ngOnInit() {
      this.foodService.getFoods().subscribe((data) => {
        this.foods = data;
        console.log(JSON.stringify(this.foods));
        
      });

  }
}
