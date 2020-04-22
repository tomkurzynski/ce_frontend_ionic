import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/common/food';
import { Subscription } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-foodvendor-view',
  templateUrl: './foodvendor-view.page.html',
  styleUrls: ['./foodvendor-view.page.scss'],
})
export class FoodvendorViewPage implements OnInit {

  foodvendor: Food;
  sub: Subscription;
  selectedPath = '';
  cookieValue = '';


  constructor(private foodService: FoodService,
              private route: ActivatedRoute,
              private router: Router,
              private cookieService: CookieService,
              private domSanitizer: DomSanitizer) { 
                this.router.events.subscribe((event: RouterEvent) => {
                  this.cookieValue = this.cookieService.get('festival-id');
                  this.selectedPath = event.url;
                });
              }

  ngOnInit() {
    this.sub =  this.route.params.subscribe(params => {
      this.foodvendor = new Food();
      const id = params['id'];
      this.foodService.getFoodVendor(id).subscribe(data => {
        this.foodvendor = data;
      });
    });
  }

  sanitizeIframeSrc() {
    let sanitizedUrl;
    if (this.foodvendor.logoUrl) {
      sanitizedUrl = this.domSanitizer.
      bypassSecurityTrustResourceUrl("data:image/png;base64, " + this.foodvendor.logoUrl);
    }
    return sanitizedUrl;
  }

  onClickFunction(id: string) {
    this.foodService.deleteById(id).subscribe(() => this.router.navigate(['/tabs/tab1/festivals/{{ cookieValue }}/foodvendors']));
  }

  getFestivalId() {
    try {
      return this.foodvendor.festival.id;
    } catch (e) {}
  }

}
