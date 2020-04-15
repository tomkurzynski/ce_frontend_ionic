import { Component, OnInit } from '@angular/core';
import { Festival } from 'src/app/common/festival';
import { Subscription } from 'rxjs';
import { FestivalService } from 'src/app/services/festival.service';
import { ActivatedRoute, RouterEvent, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { RoomService } from 'src/app/services/room.service';
import { Room } from 'src/app/common/room';

@Component({
  selector: 'app-festival-dashboard',
  templateUrl: './festival-dashboard.page.html',
  styleUrls: ['./festival-dashboard.page.scss'],
})
export class FestivalDashboardPage implements OnInit {

  selectedPath = '';
  festival: Festival;
  sub: Subscription;
  room: Room;

  constructor(private festivalService: FestivalService, 
              private roomService: RoomService,
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
      this.room = new Room();
      const id = params['id'];
      this.festivalService.getFestival(id).subscribe(data => {
        this.festival = data;
      });
    });
  }

  onClickFunction(id: string) {
    this.festivalService.deleteFestival(id).subscribe(result => this.gotoFestivalList());
  }
  gotoFestivalList() {
    this.router.navigate(['/tabs/tab1']);
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

  onRoomSubmit() {
    const fd = new FormData();

    let dto = JSON.parse(JSON.stringify(this.room));

    //TO BE VERIFIED
    dto.festival = {id: "1"};
    // fd.append('room', JSON.stringify(dto));

    // this.roomService.saveAsForm(fd).subscribe(result => this.gotoFestivalList());

    this.roomService.createRoom(dto).subscribe((data) => {
      console.log(data);
    });
  }

}
