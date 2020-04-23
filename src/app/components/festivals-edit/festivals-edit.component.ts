import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FestivalService } from 'src/app/services/festival.service';
import { CookieService } from 'ngx-cookie-service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-festivals-edit',
  templateUrl: './festivals-edit.component.html',
  styleUrls: ['./festivals-edit.component.scss'],
})
export class FestivalsEditComponent implements OnInit, OnDestroy {

  festival: any = {};
  sub: Subscription;
  selectedFile: File = null;
  cookieValue = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private festivalService: FestivalService,
              private cookieService: CookieService,
              private datePipe: DatePipe) { }
  

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.cookieValue = this.cookieService.get('user-id');
      if(id) {
        this.festivalService.getFestival(id).subscribe((festival: any) => {
          if(festival) {
            this.festival = festival;
            this.festival.href = festival._links.self.href;
          } else {
            console.log(`Event with id '${id}' not found, returning to event list`);
            this.gotoFestivalList;
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoFestivalList() {
    this.router.navigate(['/tabs/tab1']);
  }

  update() {
    const fd = new FormData();
    if (this.selectedFile) {

      fd.append('file', this.selectedFile, this.selectedFile.name);
    }

    let dto = JSON.parse(JSON.stringify(this.festival));

    //TO BE VERIFIED
    dto.user = {id: this.cookieValue};
    // dto.dateFrom = this.datePipe.transform(new Date(dto.dateFrom), 'dd-MMM-yyyy');
    // dto.dateTo = this.datePipe.transform(new Date(dto.dateTo), 'dd-MMM-yyyy');

    fd.append('festival', JSON.stringify(dto));

    //TO BE VERIFIED END

    this.festivalService.saveAsForm(fd).subscribe(result => this.gotoFestivalList());

  }

  remove(href) {
    this.festival.remove(href).subscribe(result => {
      this.gotoFestivalList();
    }, error => console.error(error));
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

}
