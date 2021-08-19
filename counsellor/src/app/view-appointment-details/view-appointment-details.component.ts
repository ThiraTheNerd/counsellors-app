import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CounsellorServiceService } from '../counsellor/counsellor-service.service';
import { Appointment } from '../shared/user.model';

@Component({
  selector: 'app-view-appointment-details',
  templateUrl: './view-appointment-details.component.html',
  styleUrls: ['./view-appointment-details.component.css']
})
export class ViewAppointmentDetailsComponent implements OnInit {

  appointment!: Appointment;


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
