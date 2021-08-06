import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
  
export class UserService {
  [x: string]: any;
  readonly rootUrl = 'http://127.0.0.1:8000/';
  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    const body: User = {
      UserName: user.UserName,
      Password: user.Password,
      email: user.email,
      FirstName: user.FirstName,
      LastName: user.LastName
    }
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/register', body, { headers: reqHeader });
  }

  userAuthentication(userName: string, password: string) {
    var data = "email=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/login', data, { headers: reqHeader });
  }

}
