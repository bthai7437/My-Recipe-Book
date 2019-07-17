import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  cards = [
    '\assets\Images\recipe-food-breakfast.jpg',
    '\assets\Images\recipe-food-lunch.jpg',
    '\assets\Images\recipe-food-dinner.jpg',
    '\assets\Images\recipe-food-desert.jpg'
  ];

  imgSrc: string;
  constructor() { }

  ngOnInit() {
  }

}
