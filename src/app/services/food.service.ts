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

  //update
  updateFoodVendow(foodVendor: Food) {
    this.httpClient.put<Food>(this.baseUrl, foodVendor);
  }

  //delete

  deleteById(id: string) {
    this.httpClient.delete<Food>(this.baseUrl + '/delete/' + id);
  }

  public saveAsForm(food: any) {
    // festival.user = 'id":1';
    return this.httpClient.post<any>(this.baseUrl, food);
  }
}
