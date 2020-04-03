import { Component, OnInit } from '@angular/core';
import { Festival } from 'src/app/common/festival';
import { FestivalService } from 'src/app/services/festival.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-festival-dashboard',
  templateUrl: './festival-dashboard.component.html',
  styleUrls: ['./festival-dashboard.component.scss'],
})
export class FestivalDashboardComponent implements OnInit {

  festival: Festival;
  sub: Subscription;

  constructor(private festivalService: FestivalService, 
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.sub =  this.route.params.subscribe(params => {
      this.festival = new Festival();
      const id = params['id'];
      this.festivalService.getFestival(id).subscribe(data => {
        this.festival = data;
      });
    });
  }

}
