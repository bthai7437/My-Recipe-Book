import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from './food';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodDataService {
  apiUrl = 'http://localhost:3000/food-recipes/foods';
  breakFoods: Food[] = [];
  lunchFoods: Food[] = [];
  dinnerFoods: Food[] = [];
  dessertFoods: Food[] = [];

  constructor(private http: HttpClient) {
  }

  getFoods(): Observable<Food[]> {
    return this.http.get<Food[]>(this.apiUrl);
  }

  getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, { responseType: 'blob' });
  }

  setFoodArray(foodArr: Food[], type: string) {
    switch (type) {
      case 'breakfast': {
        this.breakFoods = foodArr;
        break;
      }
      case 'lunch': {
        this.lunchFoods = foodArr;
        break;
      }
      case 'dinner': {
        this.dinnerFoods = foodArr;
        break;
      }
      case 'dessert': {
        this.dessertFoods = foodArr;
        break;
      }
    }
  }

  getFoodArray(type: string): Observable<Food[]> {
    switch (type) {
      case 'breakfast': {
        return of(this.breakFoods);
      }
      case 'lunch': {
        return of(this.lunchFoods);
      }
      case 'dinner': {
        return of(this.dinnerFoods);
      }
      case 'dessert': {
        return of(this.dessertFoods);
      }
    }
  }
}
