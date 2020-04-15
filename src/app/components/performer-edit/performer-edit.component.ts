import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PerformerService } from 'src/app/services/performer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-performer-edit',
  templateUrl: './performer-edit.component.html',
  styleUrls: ['./performer-edit.component.scss'],
})
export class PerformerEditComponent implements OnInit, OnDestroy {

  performer: any = {};
  sub: Subscription;
  selectedFile: File = null;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private performerService: PerformerService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if(id) {
        this.performerService.getPerformerbyId(id).subscribe((performer: any) => {
          if(performer) {
            this.performer = performer;
            this.performer.href = performer._links.self.href;
          } else {
            console.log(`Performer with id '${id}' not found, returning to performer list`);
            this.gotoPerformerList;
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoPerformerList() {
    this.router.navigate(['/tabs']);
  }

  // save() {
  //   this.performerService.savePeformer(this.performer).subscribe(result => {
  //     this.gotoPerformerList();
  //   }, error => console.error(error));
  // }

  update() {
    const fd = new FormData();
    if (this.selectedFile) {

      fd.append('file', this.selectedFile, this.selectedFile.name);
    }

    let dto = JSON.parse(JSON.stringify(this.performer));

    //TO BE VERIFIED
    dto.festival = {id: "1"};
    fd.append('performer', JSON.stringify(dto));

    //TO BE VERIFIED END

    this.performerService.saveAsForm(fd).subscribe(result => this.gotoPerformerList());

  }

  remove(href) {
    this.performer.remove(href).subscribe(result => {
      this.gotoPerformerList();
    }, error => console.error(error));
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

}
