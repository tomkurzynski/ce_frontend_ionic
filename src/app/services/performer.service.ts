import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Performers } from '../common/performers';

@Injectable({
  providedIn: 'root'
})
export class PerformerService {

  private baseUrl = 'http://localhost:9090/api/performers';

// KURŁA PACZ ANDRZEJ NA TO
  // private baseUrl = 'http://localhost:9090/performers';

  constructor(private httpClient: HttpClient) { }

  //get all
  getPerformersList() {
    return this.httpClient.get<Performers[]>(this.baseUrl);
  }

  //get by id
  getPerformerbyId(id: string) {
    return this.httpClient.get<Performers>(this.baseUrl + '/' + id);
  }

  //save
  savePeformer(performer: Performers) {
    this.httpClient.post<Performers[]>(this.baseUrl, performer);
  }

  //update
  updatePerformer(performer: Performers) {
    this.httpClient.put<Performers>(this.baseUrl, performer);
  }

  //delete
  deletePerformer(id: string) {
    this.httpClient.delete<Performers>(this.baseUrl + '/' + id);
  }
  
  public saveAsForm(performer: any) {
    // festival.user = 'id":1';
    return this.httpClient.post<any>(this.baseUrl, performer);
  }
}
