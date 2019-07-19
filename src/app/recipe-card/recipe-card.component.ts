import { Component, OnInit, Input } from '@angular/core';
import { foodDescription } from '../food-description'; 

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  @Input() food:foodDescription;

  constructor() { }

  ngOnInit() {
  }

}
