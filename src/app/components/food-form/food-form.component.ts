import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/common/food';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.scss'],
})
export class FoodFormComponent{

  food: Food;
  selectedFile: File = null;
  private cookieValue = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private foodService: FoodService,
              private cookieService: CookieService) {
      this.food = new Food();
      this.cookieValue= this.cookieService.get('festival-id');
     }

  onSubmit() {
    const fd = new FormData();
    if(this.selectedFile) {
      fd.append('file', this.selectedFile, this.selectedFile.name);
    }

    let dto = JSON.parse(JSON.stringify(this.food));
    dto.festival = {id: this.cookieValue};
    fd.append('food', JSON.stringify(dto));
    this.foodService.saveAsForm(fd).subscribe(result => this.gotoFoodList());
  }

  gotoFoodList() {
    this.router.navigate(['/tabs/tab1/festivals/{{ this.cookieValue }}/foodvendors'])
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

}
