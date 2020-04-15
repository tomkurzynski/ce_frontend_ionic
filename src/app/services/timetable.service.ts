import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Timetable } from '../common/timetable';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  private baseUrl = 'http://localhost:9090/api/timetables';


  constructor(private httpClient: HttpClient) { }

  //get all
  getTimetables() {
    return this.httpClient.get<Timetable>(this.baseUrl);
  }

  //get by id

  getTimetableById(id: string) {
    return this.httpClient.get<Timetable>(this.baseUrl + '/' + id);
  }

  //add
  createTimetable(timetable: Timetable) {
    this.httpClient.post<Timetable>(this.baseUrl, timetable);
  }

  //update
  updateTimetable(timetable: Timetable) {
    this.httpClient.put<Timetable>(this.baseUrl, timetable);
  }

  //delete
  deleteById(id: string) {
    this.httpClient.delete<Timetable>(this.baseUrl + '/' + id);
  }

}
