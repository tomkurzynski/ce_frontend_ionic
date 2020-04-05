import { Component, OnInit } from '@angular/core';
import { Festival } from 'src/app/common/festival';
import { ActivatedRoute, Router } from '@angular/router';
import { FestivalService } from 'src/app/services/festival.service';

@Component({
  selector: 'app-festivals-form',
  templateUrl: './festivals-form.component.html',
  styleUrls: ['./festivals-form.component.scss'],
})
export class FestivalsFormComponent {

  festival: Festival;
  selectedFile: File = null;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private festivalService: FestivalService) {
      this.festival = new Festival();
     }

  onSubmit() {
    // this.festivalService.save(this.festival).subscribe(result => this.gotoFestivalList());


    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);

    let dto = JSON.parse(JSON.stringify(this.festival));

    //TO BE VERIFIED
    dto.user = {id: "1"};
    dto.food = {id: dto.food};
    fd.append('festival', JSON.stringify(dto));

    //TO BE VERIFIED END

    this.festivalService.saveAsForm(fd).subscribe(result => this.gotoFestivalList());


  }

  gotoFestivalList() {
    this.router.navigate(['/tabs/tab1'])
  }

  
 

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }



}
