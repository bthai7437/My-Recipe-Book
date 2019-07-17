import { Component, OnInit } from '@angular/core';

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

  foodCategories = [
    'Breakfast',
    'Lunch',
    'Dinner',
    'Dessert'
  ];

  imgSrc: string;
  foodCategory: string;
  constructor() { }

  ngOnInit() {
  }

}
