import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Performers } from '../common/performers';

@Injectable({
  providedIn: 'root'
})
export class PerformerService {

  private baseUrl = 'http://localhost:9090/foods';

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
    this.httpClient.post<Performers>(this.baseUrl, performer);
  }
}
