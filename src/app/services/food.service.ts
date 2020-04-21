import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from '../common/food';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private baseUrl = 'http://localhost:9090/api/foods';

  constructor(private httpClient: HttpClient,
    private appService: AppService) { }

  //get all
  getFoodVendorList(id: string) {
    return this.httpClient.get<Food[]>(this.baseUrl + '/list/' + id);
  }
  //get by id
  getFoodVendor(id: string) {
    return this.httpClient.get<Food>(this.baseUrl + '/' + id);
  }

  //save
  saveFoodVendor(foodVendor: Food) {
    return this.httpClient.post<Food>(this.baseUrl, foodVendor, {headers: this.appService.authorizationToken});
  }

  //update
  updateFoodVendow(foodVendor: Food) {
    return this.httpClient.put<Food>(this.baseUrl, foodVendor, {headers: this.appService.authorizationToken});
  }

  //delete

  deleteById(id: string) {
    return this.httpClient.delete<Food>(this.baseUrl + '/' + id, {headers: this.appService.authorizationToken});
  }

  public saveAsForm(food: any) {
    // festival.user = 'id":1';
    // , {headers: this.appService.authorizationToken}
    return this.httpClient.post<any>(this.baseUrl, food, {headers: this.appService.authorizationToken});
  }
}
