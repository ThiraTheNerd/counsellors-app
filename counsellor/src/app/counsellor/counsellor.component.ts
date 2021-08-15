import { Component, OnInit } from '@angular/core';
import { Appointment,Users } from '../shared/user.model';
import { CounsellorServiceService } from './counsellor-service.service';

@Component({
  selector: 'app-counsellor',
  templateUrl: './counsellor.component.html',
  styleUrls: ['./counsellor.component.css']
})
export class CounsellorComponent implements OnInit {

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

