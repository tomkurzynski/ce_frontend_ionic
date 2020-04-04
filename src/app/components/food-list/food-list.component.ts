import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/common/food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {

  foodVendors: Food[];
  
  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.foodService.getFoodVendorList().subscribe(data  => {
      this.foodVendors = data;
    });
  }

}
