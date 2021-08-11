import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { CounsellorServiceService } from './counsellor/counsellor-service.service';
// import { Appointments } from './shared/user.model';
import { UserService } from './shared/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counsellor';

  constructor(
    // private userService: UserService,
    private userService: UserService,
    private router: Router,
    // private counsellorService: CounsellorServiceService,
  ) {

   }

  // appointmentlist!: Appointments[];

  ngOnInit() {
    // this.counsellorService.getappointments().
    //   subscribe
    //   (
    //     data =>
    //     {
    //       this.appointmentlist = data;

    //      })
  }

 
  logout() {
    this.userService.signOut();
    this.router.navigate(['/home']);
  }
}