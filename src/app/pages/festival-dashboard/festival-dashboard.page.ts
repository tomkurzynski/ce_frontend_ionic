import { Component, OnInit } from '@angular/core';
import { Festival } from 'src/app/common/festival';
import { Subscription } from 'rxjs';
import { FestivalService } from 'src/app/services/festival.service';
import { ActivatedRoute, RouterEvent, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-festival-dashboard',
  templateUrl: './festival-dashboard.page.html',
  styleUrls: ['./festival-dashboard.page.scss'],
})
export class FestivalDashboardPage implements OnInit {

  selectedPath = '';
  festival: Festival;
  sub: Subscription;

  constructor(private festivalService: FestivalService, 
              private route: ActivatedRoute,
              private router: Router,
              private domSanitizer: DomSanitizer) { 
                this.router.events.subscribe((event: RouterEvent) => {
                  this.selectedPath = event.url;
                });
              }

  ngOnInit() {
    this.sub =  this.route.params.subscribe(params => {
      this.festival = new Festival();
      const id = params['id'];
      this.festivalService.getFestival(id).subscribe(data => {
        this.festival = data;
      });
    });
  }

  sanitizeIframeSrc() {
    // <!-- <p><img [src]="'data:image/png;base64, '+ festival.logoUrl" alt="Red dot" /> </p> -->
    let sanitizedUrl;
    if (this.festival.logoUrl) {

      sanitizedUrl = this.domSanitizer.
      bypassSecurityTrustResourceUrl("data:image/png;base64, " + this.festival.logoUrl);
    }

    return sanitizedUrl;
  }

}
