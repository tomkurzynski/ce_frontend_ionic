import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  credentials = {username: '', password: ''};

  username: string;
  password : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(private app: AppService, private http: HttpClient, private router: Router) {
  }

  login() {
    // this.app.authenticate(this.credentials, () => {
    //     this.router.navigateByUrl('/');
    // });
    // const base64credentials = btoa(this.credentials.username + ':' + this.credentials.password);

    this.app.authenticate(this.credentials).subscribe(response => {
      // this.app.authenticate(base64credentials).subscribe(response => {
      if (response['name']) {
        this.router.navigateByUrl('/');
      }
    },
      () => {
        alert("Wrong credentials");
      })


    return false;
  }

}
