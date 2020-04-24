import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppService } from './services/app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { finalize } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private app: AppService,
    private http: HttpClient,
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {

    
    let that = this;

    this.app.authenticate(undefined).subscribe(response => {
      if (this.app.authorizationToken != null) {
        this.app.authenticated = true;
      } else {
        this.app.authenticated = false;
      }
    },
      () => {
        this.app.authenticated = false;
        that.router.navigateByUrl('/login')
      })
  }

  // logout() {
  //   this.http.post('logout', {}).pipe(finalize(() => {
  //     this.app.authenticated = false;
  //     this.router.navigateByUrl('/login');
  //   })).subscribe();
  // }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
