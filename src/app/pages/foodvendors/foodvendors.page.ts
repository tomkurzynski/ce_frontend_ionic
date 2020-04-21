import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/common/food';
import { FoodService } from 'src/app/services/food.service';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-foodvendors',
  templateUrl: './foodvendors.page.html',
  styleUrls: ['./foodvendors.page.scss'],
})
export class FoodvendorsPage implements OnInit {

  foodVendors: Food[];
  cookieValue = this.cookieService.get('festival-id');

  constructor(private foodService: FoodService,
    private cookieService: CookieService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(val => {
      this.cookieValue = this.cookieService.get('festival-id');
      this.foodService.getFoodVendorList(this.cookieValue).subscribe(data => {
        this.foodVendors = data;
      });
      
    });
  }

  onClickFunction(id: string) {
    this.foodService.deleteById(id).subscribe(() => this.refreshList());
  }

  refreshList() {
    this.cookieValue = this.cookieService.get('festival-id');
    this.foodService.getFoodVendorList(this.cookieValue).subscribe(data => {
      this.foodVendors = data;
    });
  }

}
