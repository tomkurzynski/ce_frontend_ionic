import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  authenticated = false;
  public authorizationToken;
  private baseUrl = 'http://localhost:9090/api/user';
  

  constructor(private httpClient: HttpClient) {
  }


  authenticate(credentials) {

    
    const headers = new HttpHeaders(credentials ? {
      Authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password),
      'Content-Type': "application/json",
      'Access-Control-Allow-Origin': "*"
    } : {},
    );


    this.authorizationToken = headers;
    
    return this.httpClient.get(this.baseUrl, { headers: headers });

  }

  // logout() {
  //   this.httpClient.post('logout', {}).pipe(finalize(() => {
  //     this.authorizationToken = null;
  //     this.router.navigateByUrl('/login');
  //   })).subscribe();
  // }


}
