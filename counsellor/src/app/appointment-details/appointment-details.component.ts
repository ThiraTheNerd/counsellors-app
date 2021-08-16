import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CounsellorServiceService } from '../counsellor/counsellor-service.service';
import { Appointment } from '../shared/user.model';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {

  appointment: Appointment | undefined;


  constructor(
    private route: ActivatedRoute,
    private appointmentDetails: CounsellorServiceService,
  ) { }

  ngOnInit(): void {
    this.getAppointment();
  }

  getAppointment(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.appointmentDetails.getAppointments(id)
      .subscribe(appointment => this.appointment = appointment);
  }

}
