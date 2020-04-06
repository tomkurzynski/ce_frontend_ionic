import { Component, OnInit } from '@angular/core';
import { Performers } from 'src/app/common/performers';
import { PerformerService } from 'src/app/services/performer.service';

@Component({
  selector: 'app-performers',
  templateUrl: './performers.page.html',
  styleUrls: ['./performers.page.scss'],
})
export class PerformersPage implements OnInit {

  performers: Performers[];
  
  constructor(private performerService: PerformerService) { }

  ngOnInit() {
    this.performerService.getPerformersList().subscribe(data => {
      this.performers = data;
    });
  }

}
