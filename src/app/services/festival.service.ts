import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Festival } from '../common/festival';

@Injectable({
  providedIn: 'root'
})
export class FestivalService {

  private baseUrl = 'http://localhost:9090/api/festivals';

  constructor(private httpClient: HttpClient) { }

  getFestivalList() {
    return this.httpClient.get<Festival[]>(this.baseUrl);
    // Festival
  }

  getFestival(id: string) {
    return this.httpClient.get<Festival>(this.baseUrl + '/' + id);
  }
  // public save(festival: Festival) {
  //   return this.httpClient.post<Festival[]>(this.baseUrl+'/update/{id}', festival)
  // }

  public save(festival: Festival) {
    return this.httpClient.post<Festival[]>(this.baseUrl, festival);
  }
}
