import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Festival } from '../common/festival';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class FestivalService {

  private baseUrl = 'http://localhost:9090/api/festivals';

  constructor(private httpClient: HttpClient,
    private appService: AppService) { }

  getFestivalList(id: string) {
    return this.httpClient.get<Festival[]>(this.baseUrl + '/list/' + id);
    // Festival
  }

  getFestival(id: string) {
    return this.httpClient.get<Festival>(this.baseUrl + '/' + id);
  }

  public save(festival: Festival) {
    return this.httpClient.post<Festival[]>(this.baseUrl, festival, { headers: this.appService.authorizationToken });
  }

  public saveAsForm(festival: any) {
    return this.httpClient.post<any>(this.baseUrl, festival, { headers: this.appService.authorizationToken });
  }

  public deleteFestival(id: string) {
    return this.httpClient.delete<Festival>(this.baseUrl + '/' + id, { headers: this.appService.authorizationToken });
  }
}
