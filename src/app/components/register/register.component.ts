import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/user';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent{

  user:  User;
  passConfirm: string;

  constructor(private app: AppService,
              private router: Router,
              private userService: UserService) { 
                this.user = new User();
              }

  onSubmit() {
    const fd = new FormData();
    let dto = JSON.parse(JSON.stringify(this.user));

    if (this.user.password !== this.passConfirm) {
      alert("Passwords don't match!");

    } else {
      dto.password = btoa(dto.password);
      // fd.append('festival', JSON.stringify(dto));
      this.userService.saveUser(dto).subscribe(() => {
        this.router.navigateByUrl('/login')
      }, () => {
alert("dupa");
      });
      
    }
  }

  // validatePassword(){
  //   if(dto.password != doNotTrack.password_confirmation) {
  //     confirm_password.setCustomValidity("Passwords Don't Match");
  //   } else {
  //     confirm_password.setCustomValidity('');
  //   }
  // }


}
