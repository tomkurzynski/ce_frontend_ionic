import { Component, OnInit } from '@angular/core';
import { Festival } from 'src/app/common/festival';
import { ActivatedRoute, Router } from '@angular/router';
import { FestivalService } from 'src/app/services/festival.service';

@Component({
  selector: 'app-festivals-form',
  templateUrl: './festivals-form.component.html',
  styleUrls: ['./festivals-form.component.scss'],
})
export class FestivalsFormComponent {

  festival: Festival;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private festivalService: FestivalService) {
      this.festival = new Festival();
     }

  onSubmit() {
    this.festivalService.save(this.festival).subscribe(result => this.gotoFestivalList());
  }
  gotoFestivalList() {
    this.router.navigate(['/tabs/tab1'])
  }

}
