import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../common/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = 'http://localhost:9090/api/stage';

  constructor(private httpClient: HttpClient) { }

  //get all
  getRooms() {
    return this.httpClient.get<Room>(this.baseUrl);
  }

  //get by id
  getRoomById(id: string) {
    return this.httpClient.get<Room>(this.baseUrl + '/' + id);
  }

  //create
  createRoom(room: Room) {
    return this.httpClient.post<Room>(this.baseUrl, room);
  }

  //update
  updateRoom(room: Room) {
    this.httpClient.put<Room>(this.baseUrl, room);
  }

  //delete
  deleteRoom(id: string) {
    this.httpClient.delete<Room>(this.baseUrl + '/' + id);
  }

  public saveAsForm(room: any) {
    return this.httpClient.post<any>(this.baseUrl, room);
  }
}

