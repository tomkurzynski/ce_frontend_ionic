import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:9090/api/users';

  constructor(private httpClient: HttpClient) { }

  //get all
  getUserList() {
    return this.httpClient.get<User[]>(this.baseUrl);
  }

  //get by id
  getUserById(id: string) {
    return this.httpClient.get<User>(this.baseUrl + '/' + id);
  }

  //save
  saveUser(user: User) {
    this.httpClient.post<User>(this.baseUrl, user);
  }

  //update
  updateUser(user: User) {
    this.httpClient.put<User>(this.baseUrl, user);
  }
}
