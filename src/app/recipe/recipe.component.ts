import { Component, OnInit } from '@angular/core';
import { mockFoods } from './mock-foods';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  cards = [
    '/assets/Images/recipe-card/recipe-card-breakfast.jpg',
    '/assets/Images/recipe-card/recipe-card-lunch.jpg',
    '/assets/Images/recipe-card/recipe-card-dinner.jpg',
    '/assets/Images/recipe-card/recipe-card-desert.jpg'
  ];

  foods = mockFoods;
 
  foodCategory: string;

  constructor() { }

  ngOnInit() {
  }

}
