import { Component, OnInit } from '@angular/core';
import { Festival } from 'src/app/common/festival';
 import { FestivalService } from 'src/app/services/festival.service';

@Component({
  selector: 'app-festivals-list',
  templateUrl: './festivals-list.component.html',
  styleUrls: ['./festivals-list.component.scss'],
})
export class FestivalsListComponent implements OnInit {

  festivals: Festival[];

  constructor(private festivalService: FestivalService) { }
  // private festivalService: FestivalService
  ngOnInit() {
    this.festivalService.getFestivalList().subscribe(data => {
      this.festivals = data;
    });
  }

}
