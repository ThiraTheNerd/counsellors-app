import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment, Clients, Groups, Medication, Messages, Users } from '../shared/user.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class CounsellorServiceService {
  api_url = "http://127.0.0.1:8000/";
  group_url = "http://127.0.0.1:8000/api/groups";
  users_url = "http://127.0.0.1:8000/clients";
  appointment_url = "http://127.0.0.1:8000/api/book";
  medication_url = "http://127.0.0.1:8000/api/medicine/";



  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


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
    return this.httpclient.get<Users[]>(this.users_url)
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
  updateAppointment(id: string, appointment: any) {
    return this.httpclient.patch<Appointment>(this.appointment_url + "/" + id + "/",
      JSON.stringify(appointment), this.httpOptions);
  }

  // return this.httpClient.put<User>(this.endpoint + '/users/' + id
  //   , JSON.stringify(data), this.httpHeader)

  // updateAppointments(id: number): Observable<Appointment> {
  //   const url = `${this.appointment_url}/${id}/`;
  //   return this.httpclient.patch<Appointment>(url)
  // }

  prescribeMedic(medication: Medication): Observable<any> {
    const headers = { 'content-type': 'application/json', 'Authorization': 'Bearer access' }
    const body = JSON.stringify(medication);
    console.log(body)
    return this.httpclient.post(this.medication_url, body, { 'headers': headers, observe: 'response' }).pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      }
      )
    )
  }
  // updateAppointment(id: number, appointment: string): Observable<Appointment> {
    
  //   return this.httpclient.post<Appointment>(this.appointment_url + id, JSON.stringify(appointment),httpOptions)
    
  // }
  // HttpClient API delete() method => Delete appointment 
  deleteAppointment(id:number) {
    return this.httpclient.delete<Appointment>(this.appointment_url + id, this.httpOptions)
    
      
  }


  // HttpClient API get() method => Fetch employee
  getAppointment(id: number): Observable<Appointment> {
    return this.httpclient.get<Appointment>(this.appointment_url +"/"+ id +"/")
      
  }


  getClients(id: number): Observable<Clients[]> {
    const url = `${this.group_url}/${id}`;
    return this.httpclient.get<Clients[]>(url)
  }

  getMessages(id: number): Observable<Messages[]> {
    const url = `${this.group_url}/${id}`;
    return this.httpclient.get<Messages[]>(url)

  }


}
