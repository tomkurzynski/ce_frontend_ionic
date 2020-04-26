import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';
import { Room } from 'src/app/common/room';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {

  rooms: Room[];
  cookieValue = '';

  constructor(private roomService: RoomService,
              private cookieService: CookieService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(val => {
      // put the code from `ngOnInit` here

      this.cookieValue = this.cookieService.get('festival-id');

      this.roomService.getRooms(this.cookieValue).subscribe(data => {
        this.rooms = data;
      });
      
    });
  }

  onClickFunction(id: string) {
    this.roomService.deleteRoom(id).subscribe(() => { this.refreshList(); });
  }

  refreshList() {
    this.cookieValue = this.cookieService.get('festival-id');
    this.roomService.getRooms(this.cookieValue).subscribe(data => {
      this.rooms = data;
    });
  }

}
