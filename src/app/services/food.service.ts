import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from '../common/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private baseUrl = 'http://localhost:9090/api/foods';

  constructor(private httpClient: HttpClient) { }

  //get all
  getFoodVendorList() {
    return this.httpClient.get<Food[]>(this.baseUrl);
  }
  //get by id
  getFoodVendor(id: string) {
    return this.httpClient.get<Food>(this.baseUrl + '/' + id);
  }

  //save
  saveFoodVendor(foodVendor: Food) {
    this.httpClient.post<Food>(this.baseUrl, foodVendor);
  }
}
