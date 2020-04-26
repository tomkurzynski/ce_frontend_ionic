import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/common/room';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'src/app/services/room.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.scss'],
})
export class RoomFormComponent {

  room: Room;
  selectedFile: File = null;
  cookieValue = '';

  constructor(private route: ActivatedRoute,
    private router: Router,
    private roomStageService: RoomService,
    private cookieService: CookieService) {
      this.room = new Room();
      this.cookieValue = this.cookieService.get('festival-id');
  }

  onSubmit() {
    const fd = new FormData();
    if (this.selectedFile) {
      fd.append('file', this.selectedFile, this.selectedFile.name);
    }

    let dto = JSON.parse(JSON.stringify(this.room));
    dto.festival = { id: this.cookieValue };
    fd.append('room', JSON.stringify(dto));
    this.roomStageService.saveAsForm(fd).subscribe(result => this.gotoRoomStageList());
  }

  gotoRoomStageList() {
    this.router.navigate(['/tabs/tab1/festivals/{{ cookieValue }}/rooms']);
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

}
