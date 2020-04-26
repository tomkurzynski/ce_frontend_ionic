import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RoomService } from 'src/app/services/room.service';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.scss'],
})
export class RoomEditComponent implements OnInit {

  room: any = {};
  sub: Subscription;
  selectedFile: File = null;
  cookieValue = '';

  constructor(private route: ActivatedRoute,
    private router: Router,
    private roomStageService: RoomService,
    private cookieService: CookieService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.cookieValue = this.cookieService.get('festival-id');
      const id = params['id'];
      if (id) {
        this.roomStageService.getRoomById(id).subscribe((room: any) => {
          if (room) {
            this.room = room;
            this.room.href = room._links.self.href;
          } else {
            console.log(`Room with id '${id}' not found, returning to room list`);
            this.gotoRoomStageList;
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoRoomStageList() {
    this.router.navigate(['/tabs/tab1/festivals/{{ cookieValue }}/rooms']);
  }

  update() {
    const fd = new FormData();

    if (this.selectedFile) {
      fd.append('file', this.selectedFile, this.selectedFile.name);
    }

    let dto = JSON.parse(JSON.stringify(this.room));
    dto.festival = { id: this.cookieValue };
    fd.append('room', JSON.stringify(dto));
    this.roomStageService.saveAsForm(fd).subscribe(result => this.gotoRoomStageList());
  }

  remove(href) {
    this.room.remove(href).subscribe(result => {
      this.gotoRoomStageList();
    }, error => console.error(error));
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }
}
