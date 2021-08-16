import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment, Groups, Users } from '../shared/user.model';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CounsellorServiceService {
  api_url = "http://127.0.0.1:8000/";
  group_url = "http://127.0.0.1:8000/api/groups";
  users_url = "http://127.0.0.1:8000/users";
  appointment_url = "http://127.0.0.1:8000/api/book";

  constructor(private httpclient: HttpClient) { }
  

  // getappointments(): Observable<any> {
  //   return this.httpclient.get('http://127.0.0.1:8000/api/book')
  // }

  



  
  // users!: Users[]



  creategroups(group: Groups): Observable<any> {
    const headers = { 'content-type': 'application/json', 'Authorization': 'Bearer access' }
    const body = JSON.stringify(group);
    

    console.log(body)
    return this.httpclient.post(this.api_url + 'api/groups/', body, { 'headers': headers, observe: 'response' }).pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      }
      )
    )
  }


  getappointments(): Observable<Appointment[]> {
    return this.httpclient.get<Appointment[]>(this.appointment_url)

  }


  getGroup(): Observable<Groups[]> {
    return this.httpclient.get<Groups[]>(this.group_url)
      
  }

  

  getClientList(): Observable<Users[]> {
    return this.httpclient.get<Users[]>(this.appointment_url)
  }

   
  

  /** GET groups by id. Will 404 if id not found */
  getGroups(id: number): Observable<Groups> {
    const url = `${this.group_url}/${id}`;
    return this.httpclient.get<Groups>(url)
     
  }


  getAppointments(id: number): Observable<Appointment> {
    const url = `${this.appointment_url}/${id}/`;
    return this.httpclient.get<Appointment>(url)
  }
}
