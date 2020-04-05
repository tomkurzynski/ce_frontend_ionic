import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, ActivatedRoute } from '@angular/router';
import { Festival } from 'src/app/common/festival';
import { Subscription } from 'rxjs';
import { FestivalService } from 'src/app/services/festival.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Dashboard',
      url: '/tabs/festival-dashboard/:id'
    },
    {
      title: 'Performers',
      url: '/menu/performers'
    },
    {
      title: 'Food Vendors',
      url: '/menu/foodvendors'
    }
  ];

  selectedPath = '';
  festival: Festival;
  sub: Subscription;

  constructor(private router: Router,
    private festivalService: FestivalService,
    private route: ActivatedRoute) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.festival = new Festival();
      const id = params['id'];
      this.festivalService.getFestival(id).subscribe(data => {
        this.festival = data;
      });
    });
  }

}
