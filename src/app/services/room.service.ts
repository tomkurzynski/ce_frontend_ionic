import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../common/room';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = 'http://localhost:9090/api/stage';

  constructor(private httpClient: HttpClient,
              private appService: AppService) { }

  //get all
  getRooms(id: string) {
    return this.httpClient.get<Room[]>(this.baseUrl + '/list/' + id);
  }

  //get by id
  getRoomById(id: string) {
    return this.httpClient.get<Room>(this.baseUrl + '/' + id);
  }

  //create
  createRoom(room: Room) {
    return this.httpClient.post<Room>(this.baseUrl, room, {headers: this.appService.authorizationToken});
  }

  //update
  updateRoom(room: Room) {
    this.httpClient.put<Room>(this.baseUrl, room, {headers: this.appService.authorizationToken});
  }

  //delete
  deleteRoom(id: string) {
    return this.httpClient.delete<Room>(this.baseUrl + '/' + id, {headers: this.appService.authorizationToken});
  }

  public saveAsForm(room: any) {
    return this.httpClient.post<any>(this.baseUrl + '/save', room, {headers: this.appService.authorizationToken});
  }
}

