import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


const AUTH_API = "https://jose-counsellor.herokuapp.com/";
const MEDIC_API = "https://jose-counsellor.herokuapp.com/"



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class UserService {
  // getStatus() {
  //   throw new Error('Method not implemented.');
  // }
  // private loggedIn: boolean = false;

  constructor(private http: HttpClient, private router: Router,) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      email,
      password
    }, httpOptions);
  }


  // login(userdata: any): Observable<any> {
  //   return this.http.post(AUTH_API + 'login', userdata)
  // }

  register(username: string, email: string, firstName: string, lastName: string, password: string, role:"is_client"): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      username,
      email,
      firstName,
      lastName,
      password,
      role,
    }, httpOptions);
  }
  // this.authService.register(username, email, phone, role = 'is_patient', password).subscribe(
  //   (data) => {
  //     console.log(data);
  //     this.isSuccessful = true;
  //     this.isSignUpFailed = false;
  //     this.router.navigate(['home/signin']);
  //   },
  //   (err) => {
  //     this.errorMessage = err.error.message;
  //     this.isSignUpFailed = true;
  //   }
  // );

  signOut(): void {
    localStorage.clear();
    this.router.navigate(['/']);

  }
  getPrescription(): Observable<any> {
    return this.http.get<any[]>(MEDIC_API + 'medicine/',);
  }

  getClients(): Observable<any[]> {
    return this.http.get<any[]>(AUTH_API + 'api/book/',);
  }
  

}



