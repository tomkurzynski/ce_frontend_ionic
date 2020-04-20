import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  authenticated = false;
  public authorizationToken;
  private baseUrl = 'http://localhost:9090/api/user';

  constructor(private http: HttpClient) {
  }


  authenticate(credentials) {

    const headers = new HttpHeaders(credentials ? {
      Authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password),
      'Content-Type': "application/json",
      'Access-Control-Allow-Origin': "*"
    } : {},
    );

   
    // const header = new HttpHeaders()
    // .set('content-type', 'application/json')
    // .set('Access-Control-Allow-Origin', '*')
    // .set('Authorization', 'Basic ' + credentials)
    // .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE')
    // .set('Access-Control-Max-Age', '3600')
    // .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Range, Content-Disposition, Content-Type, Authorization, X-CSRF-TOKEN');
   

    // const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // headers.append('authentication', 'Basic ' + btoa(credentials.username + ':' + credentials.password));

    // let options = new RequestOptions({ headers: headers });


    this.authorizationToken = headers;
    return this.http.get(this.baseUrl, { headers: headers });
    // return this.http.get(this.baseUrl);

  }



}
