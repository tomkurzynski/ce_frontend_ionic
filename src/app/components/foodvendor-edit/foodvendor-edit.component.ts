import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-foodvendor-edit',
  templateUrl: './foodvendor-edit.component.html',
  styleUrls: ['./foodvendor-edit.component.scss'],
})
export class FoodvendorEditComponent implements OnInit, OnDestroy {

  foodvendor: any = {};
  sub: Subscription;
  selectedFile: File = null;
  cookieValue = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private foodService: FoodService,
              private cookieService: CookieService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.cookieValue = this.cookieService.get('festival-id');
      const id = params['id'];
      if(id) {
        this.foodService.getFoodVendor(id).subscribe((foodvendor: any) => {
          if(foodvendor) {
            this.foodvendor = foodvendor;
            this.foodvendor.href = foodvendor._links.self.href;
          } else {
            console.log(`Food vendor with id '${id}' not found, returning to FoodVendor list`);
            this.gotoFoodVendorList;
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoFoodVendorList() {
    this.router.navigate(['/tabs/tab1/festivals/{{ cookieValue }}/foodvendors']);
  }

  update() {
    const fd = new FormData();

    if(this.selectedFile) {
      fd.append('file', this.selectedFile, this.selectedFile.name);
    }

    let dto = JSON.parse(JSON.stringify(this.foodvendor));
    dto.festival = {id: this.cookieValue};
    fd.append('food', JSON.stringify(dto));
    this.foodService.saveAsForm(fd).subscribe(result => this.gotoFoodVendorList());
  }

  remove(href) {
    this.foodvendor.remove(href).subscribe(result => {
      this.gotoFoodVendorList();
    }, error => console.error(error));
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

}
