import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../common/user';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:9090/api/users';

  constructor(private httpClient: HttpClient,
              private appService: AppService) { }

  //get all
  getUserList() {
    return this.httpClient.get<User[]>(this.baseUrl);
  }

  //get by id
  getUserById(id: string) {
    return this.httpClient.get<User>(this.baseUrl + '/' + id);
  }

  getUserByEmail(email: string) {
    return this.httpClient.get<User>('http://localhost:9090/api/user/' + email)
  }

  //save
  saveUser(user: User) {
    this.httpClient.post<User>(this.baseUrl, user, {headers: this.appService.authorizationToken});
  }

  //update
  updateUser(user: User) {
    this.httpClient.put<User>(this.baseUrl, user, {headers: this.appService.authorizationToken});
  }

  deleteUser(id: string) {
    return this.httpClient.delete<User>(this.baseUrl + '/' + id, {headers: this.appService.authorizationToken});
  }
}
