import { Component, OnInit } from '@angular/core';
import { Performers } from 'src/app/common/performers';
import { Subscription } from 'rxjs';
import { PerformerService } from 'src/app/services/performer.service';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Festival } from 'src/app/common/festival';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-performer-view',
  templateUrl: './performer-view.page.html',
  styleUrls: ['./performer-view.page.scss'],
})
export class PerformerViewPage implements OnInit {

  performer: Performers;
  sub: Subscription;
  selectedPath = '';
  cookieValue = '';


  constructor(private performerService: PerformerService,
              private route: ActivatedRoute,
              private router: Router,
              private domSanitizer: DomSanitizer,
              private cookieService: CookieService) { 
                this.router.events.subscribe((event: RouterEvent) => {
                  this.selectedPath = event.url;
                  this.cookieValue= this.cookieService.get('festival-id');
                });
              }

  ngOnInit() {
    this.sub =  this.route.params.subscribe(params => {
      this.performer = new Performers();
      const id = params['id'];
      this.performerService.getPerformerbyId(id).subscribe(data => {
        this.performer = data;
      });
    });
  }

  sanitizeIframeSrc() {
    // <!-- <p><img [src]="'data:image/png;base64, '+ festival.logoUrl" alt="Red dot" /> </p> -->
    let sanitizedUrl;
    if (this.performer.photo) {

      sanitizedUrl = this.domSanitizer.
      bypassSecurityTrustResourceUrl("data:image/png;base64, " + this.performer.photo);
    }

    return sanitizedUrl;
  }

  onClickFunction(id: string) {
    this.performerService.deletePerformer(id).subscribe(() => { this.router.navigate(['/tabs/tab1/festivals/{{ cookieValue }}/performers']); });
  }

  getFestivalId() {

    try {
      return this.performer.festival.id;
    } catch (e) {}
    
  }

}
