import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/common/food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-foodvendors',
  templateUrl: './foodvendors.page.html',
  styleUrls: ['./foodvendors.page.scss'],
})
export class FoodvendorsPage implements OnInit {

  foodVendors: Food[];

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.refreshList();
  }

  onClickFunction(id: string) {
    this.foodService.deleteById(id).subscribe(() => this.refreshList());
  }

  refreshList() {
    this.foodService.getFoodVendorList().subscribe(data => {
      this.foodVendors = data;
    });
  }

}
