import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/user';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent{

  user: User;

  constructor(private app: AppService,
              private router: Router) { }

  onSubmit() {
    const fd = new FormData();
    let dto = JSON.parse(JSON.stringify(this.user));
    dto.festival = {id: dto.festival};
    fd.append('festival', JSON.stringify(dto));
    this.app.register(fd);
    this.router.navigateByUrl('/login')
  }

}
