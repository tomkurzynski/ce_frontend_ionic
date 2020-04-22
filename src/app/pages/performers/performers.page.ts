import { Component, OnInit } from '@angular/core';
import { Performers } from 'src/app/common/performers';
import { PerformerService } from 'src/app/services/performer.service';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-performers',
  templateUrl: './performers.page.html',
  styleUrls: ['./performers.page.scss'],
})
export class PerformersPage implements OnInit {

  performers: Performers[];
  cookieValue = this.cookieService.get('festival-id');

  constructor(private performerService: PerformerService,
    private cookieService: CookieService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.refreshList();
    this.route.params.subscribe(val => {
      // put the code from `ngOnInit` here

      this.cookieValue = this.cookieService.get('festival-id');

      this.performerService.getPerformersList(this.cookieValue).subscribe(data => {
        this.performers = data;
      });
      
    });
  }

  onClickFunction(id: string) {
    this.performerService.deletePerformer(id).subscribe(() => { this.refreshList(); });
  }

  refreshList() {
    this.cookieValue = this.cookieService.get('festival-id');
    this.performerService.getPerformersList(this.cookieValue).subscribe(data => {
      this.performers = data;
    });
  }

  
}
