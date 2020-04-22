import { Component, OnInit } from '@angular/core';
import { Festival } from 'src/app/common/festival';
import { FestivalService } from 'src/app/services/festival.service';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  festivals: Festival[];
  private cookieValue = this.cookieService.get('user-id');

  constructor(private festivalService: FestivalService,
    private cookieService: CookieService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.refreshList();
    this.route.params.subscribe(val => {
      this.cookieValue = this.cookieService.get('user-id');
      this.festivalService.getFestivalList(this.cookieValue).subscribe(data => {
        this.festivals = data;
      });
      
    });
  }
  refreshList() {
    this.cookieValue = this.cookieService.get('user-id');
    this.festivalService.getFestivalList(this.cookieValue).subscribe(data => {
      this.festivals = data;
    });
  }

  onClickFunction(id: string) {
    this.festivalService.deleteFestival(id).subscribe(() => { this.refreshList(); });
  }

  festivalCookie(id: string) {
    this.cookieService.set('festival-id', id);
  }

}
