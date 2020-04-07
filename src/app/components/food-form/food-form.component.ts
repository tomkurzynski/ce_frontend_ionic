import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/common/food';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.scss'],
})
export class FoodFormComponent{

  food: Food;
  selectedFile: File = null;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private foodService: FoodService) {
      this.food = new Food();
     }

  onSubmit() {
    // this.festivalService.save(this.festival).subscribe(result => this.gotoFestivalList());


    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);

    let dto = JSON.parse(JSON.stringify(this.food));

    //TO BE VERIFIED
    dto.event = {id: "1"};
    fd.append('food', JSON.stringify(dto));

    //TO BE VERIFIED END

    this.foodService.saveAsForm(fd).subscribe(result => this.gotoFoodList());


  }

  gotoFoodList() {
    this.router.navigate(['/tabs/tab1'])
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

}
