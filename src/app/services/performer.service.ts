import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Performers } from '../common/performers';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class PerformerService {

  private baseUrl = 'http://localhost:9090/api/performers';

  constructor(private httpClient: HttpClient,
    private appService: AppService) { }

  //get all
  getPerformersList(id: string) {
    return this.httpClient.get<Performers[]>(this.baseUrl + '/list/' + id);
  }

  //get by id
  getPerformerbyId(id: string) {
    return this.httpClient.get<Performers>(this.baseUrl + '/' + id);
  }

  //save
  savePeformer(performer: Performers) {
    return this.httpClient.post<Performers[]>(this.baseUrl, performer, {headers: this.appService.authorizationToken});
  }

  //update
  updatePerformer(performer: Performers) {
    this.httpClient.put<Performers>(this.baseUrl, performer, {headers: this.appService.authorizationToken});
  }

  //delete
  deletePerformer(id: string) {
    return this.httpClient.delete<Performers>(this.baseUrl + '/' + id, {headers: this.appService.authorizationToken});
  }
  
  public saveAsForm(performer: any) {
    // festival.user = 'id":1';
    return this.httpClient.post<any>(this.baseUrl, performer, {headers: this.appService.authorizationToken});
  }
}
