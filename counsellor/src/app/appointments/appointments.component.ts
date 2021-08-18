import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../shared/appointment.service';
import { Appointment } from '../shared/user.model';


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  public successMsg!: string;
  public errorMsg!: string;
  date!: Date;
  timeStart!: string;
  timeEnd!: string;
  message!: string;


  // bookAppointment!: Appointment


  bookAppointment = new Appointment("",0,new Date(),"","","")



  constructor(private bookService: AppointmentService) { }

  ngOnInit(): void {
  }


  bookSession() {
    this.bookService.bookSession(this.bookAppointment).subscribe(data => {
      console.log(data)
    })
    window.location.reload();
  }
  

  
  

}
