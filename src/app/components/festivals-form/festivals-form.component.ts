import { Component, OnInit } from '@angular/core';
import { Festival } from 'src/app/common/festival';
import { ActivatedRoute, Router } from '@angular/router';
import { FestivalService } from 'src/app/services/festival.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-festivals-form',
  templateUrl: './festivals-form.component.html',
  styleUrls: ['./festivals-form.component.scss'],
})
export class FestivalsFormComponent {

  festival: Festival;
  selectedFile: File = null;
  cookieValue = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private festivalService: FestivalService,
              private cookieService: CookieService) {
      this.festival = new Festival();
      this.cookieValue= this.cookieService.get('user-id');
     }

  onSubmit() {
    const fd = new FormData();

    if(this.selectedFile) {
      fd.append('file', this.selectedFile, this.selectedFile.name);
    } else {

    }

    let dto = JSON.parse(JSON.stringify(this.festival));

    //TO BE VERIFIED
    dto.user = {id: this.cookieValue};
    dto.food = {id: dto.food};
    fd.append('festival', JSON.stringify(dto));

    //TO BE VERIFIED END

    this.festivalService.saveAsForm(fd).subscribe(result => this.gotoFestivalList());
  }

  gotoFestivalList() {
    this.router.navigate(['/tabs/tab1']);                                       
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }
}
