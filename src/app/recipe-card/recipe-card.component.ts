import { Component, OnInit, Input } from '@angular/core';
import { Food } from '../food';


@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  @Input() food: Food;
  aFood: string;
  constructor() {
  }

  ngOnInit() {}

}
