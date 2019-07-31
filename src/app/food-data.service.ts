import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from './food';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodDataService {
  apiUrl = 'http://localhost:3000/food-recipes/foods';

  constructor(private http: HttpClient) {
  }

  getFoods(): Observable<Food[]> {
    return this.http.get<Food[]>(this.apiUrl);
  }

  getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, { responseType: 'blob' });
  }

}
