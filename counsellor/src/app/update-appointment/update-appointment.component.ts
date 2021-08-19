import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CounsellorServiceService } from '../counsellor/counsellor-service.service';
import { Appointment } from '../shared/user.model';


@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})



export class UpdateAppointmentComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  appointmentData: any = {};
  // appointment!: Appointment;

  constructor(
    public appointmentDetails: CounsellorServiceService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
  }
  ngOnInit() {
    this.appointmentDetails.getAppointment(this.id).subscribe((data: {}) => {
      this.appointmentData = data;
    })
  }
  // Update appoitment data
  // updateAppointment() {
  //   if (window.confirm('Are you sure, you want to update?')) {
  //     this.restApi.updateAppointment(this.id, this.appointmentData).subscribe(data => {
  //     this.router.navigate(['/counsellor'])
  //     })
  //   }
  // }


  updateAppointment(id: any, data: any) {
    if (window.confirm('Are you sure, you want to update?')) {
      this.appointmentDetails.updateAppointment(this.id, data)
        .subscribe(data => {
          console.log("data");
          this.router.navigate(['/counsellor'])
        });

    }


  }
}