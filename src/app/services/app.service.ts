import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';


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
      Authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {},
    );


    this.authorizationToken = headers;

    return this.httpClient.get(this.baseUrl, { headers: headers });

  }

  register(credentials) {


    const headers = new HttpHeaders(credentials ? {
      Authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {},
    );


    this.authorizationToken = headers;

    this.httpClient.post(this.baseUrl, { headers: headers });

  }
}
