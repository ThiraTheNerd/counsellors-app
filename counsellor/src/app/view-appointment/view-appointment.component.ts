import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CounsellorServiceService } from '../counsellor/counsellor-service.service';
import { Appointment } from '../shared/user.model';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})

export class ViewAppointmentComponent implements OnInit {

  constructor(private counsellorService: CounsellorServiceService,) { }

  appointmentlist!: Appointment[];
  // userList!: Users[];

  ngOnInit() {
    this.counsellorService.getappointments().
      subscribe
      (
        data => {
          this.appointmentlist = data;

        })



  }

}

