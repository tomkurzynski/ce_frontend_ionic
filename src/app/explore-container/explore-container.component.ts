import { Component, OnInit, Input } from '@angular/core';
import { Festival } from '../common/festival';
import { FestivalService } from '../services/festival.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {}


}
