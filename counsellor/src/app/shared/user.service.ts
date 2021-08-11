import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


const AUTH_API = "http://127.0.0.1:8000/";



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private loggedIn: boolean = false;

  constructor(private http: HttpClient, private router: Router,) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      email,
      password
    }, httpOptions);
  }

  register(username: string, email: string, firstName: string, lastName: string, password: string, role:string): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      username,
      email,
      firstName,
      lastName,
      password,
      role,
    }, httpOptions);
  }

  signOut(): void {
    localStorage.clear();
    this.router.navigate(['/']);

  }
  

}



