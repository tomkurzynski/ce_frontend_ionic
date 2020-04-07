import { Component, OnInit } from '@angular/core';
import { Performers } from 'src/app/common/performers';
import { ActivatedRoute, Router } from '@angular/router';
import { PerformerService } from 'src/app/services/performer.service';

@Component({
  selector: 'app-performer-form',
  templateUrl: './performer-form.component.html',
  styleUrls: ['./performer-form.component.scss'],
})
export class PerformerFormComponent {

  performer: Performers;
  selectedFile: File = null;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private performerService: PerformerService) {
                this.performer = new Performers();
               }

  onSubmit() {
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    let dto = JSON.parse(JSON.stringify(this.performer));

    //TO BE CHANGED
    dto.festival = {id: "1"};
    fd.append('performer', JSON.stringify(dto));
    //TO BE CHANGED END

    this.performerService.saveAsForm(fd).subscribe(result => this.gotoPerformerList());
  }

  gotoPerformerList() {
    this.router.navigate(['/tabs/tab1']);
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

}
