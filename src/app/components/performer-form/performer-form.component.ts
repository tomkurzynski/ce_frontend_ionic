import { Component, OnInit } from '@angular/core';
import { Performers } from 'src/app/common/performers';
import { ActivatedRoute, Router } from '@angular/router';
import { PerformerService } from 'src/app/services/performer.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-performer-form',
  templateUrl: './performer-form.component.html',
  styleUrls: ['./performer-form.component.scss'],
})
export class PerformerFormComponent {

  performer: Performers;
  selectedFile: File = null;
  cookieValue = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private performerService: PerformerService,
              private cookieService: CookieService) {
                this.performer = new Performers();
                this.cookieValue= this.cookieService.get('festival-id');
               }

  onSubmit() {
    const fd = new FormData();
    if (this.selectedFile) {

      fd.append('file', this.selectedFile, this.selectedFile.name);
    } else {
      // fd.append('file', null);
    }
    let dto = JSON.parse(JSON.stringify(this.performer));

    //TO BE CHANGED
    dto.festival = {id: this.cookieValue};
   // dto.photo = null;
    fd.append('performer', JSON.stringify(dto));
    //TO BE CHANGED END

    this.performerService.saveAsForm(fd).subscribe(result => this.gotoPerformerList());
  }

  gotoPerformerList() {
    this.router.navigate(['/tabs/tab1/festivals/{{ this.cookieValue }}/performers']);
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

}
