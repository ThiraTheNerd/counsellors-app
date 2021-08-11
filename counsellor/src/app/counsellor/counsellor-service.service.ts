import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounsellorServiceService {

  constructor(private httpclient: HttpClient) { }
  

  getappointments(): Observable<any>{
    return this.httpclient.get('http://127.0.0.1:8000/api/book')
  }



  getallusers(): Observable<any> {
    return this.httpclient.get('http://127.0.0.1:8000/users')
  }
}
