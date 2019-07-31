import { Component, OnInit, Input } from '@angular/core';
import { Food } from '../food';


@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  @Input() food: Food;
  apiUrl = 'http://localhost:3000/';
  foodImage: any;


  constructor() {
  }

  ngOnInit() {
    this.food.foodImage = this.apiUrl + this.food.foodImage;
  }
}
