import { Component } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private app: AppService,
              private router: Router,
              private httpClient: HttpClient) {}
  

  logout() {
    this.httpClient.post('login', {}).pipe(finalize(() => {
      this.app.authorizationToken = null;
      this.router.navigateByUrl('/login');
    })).subscribe();
  }
}
