import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/common/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  credentials = {username: '', password: ''};
  user: User;

  // username: string;
  // password : string;
  // errorMessage = 'Invalid Credentials';
  // successMessage: string;
  // invalidLogin = false;
  // loginSuccess = false;

  constructor(private app: AppService, 
              private httpClient: HttpClient, 
              private router: Router,
              private userService: UserService,
              private cookieService: CookieService) {
  }

  login() {
    // this.app.authenticate(this.credentials, () => {
    //     this.router.navigateByUrl('/');
    // });
    // const base64credentials = btoa(this.credentials.username + ':' + this.credentials.password);

    this.app.authenticate(this.credentials).subscribe(response => {
      // this.app.authenticate(base64credentials).subscribe(response => {
      if (response['name']) {
       
        this.user = new User();
        let username = this.credentials.username;
        this.userService.getUserByEmail(username.replace(/\./gi, ",")).subscribe(data => {
          this.user = data;
       
          this.cookieService.set('user-id', this.user.id);
          this.router.navigateByUrl('/');
        });

        

        
        // this.userId = this.userService.getUserByEmail(this.credentials.username).subscribe(data => {
        //   this.userId - data;
        // });
       
      }
    },
      () => {
        alert("Wrong credentials");
      })


    return false;
  }

}
