import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-prescribed',
  templateUrl: './prescribed.component.html',
  styleUrls: ['./prescribed.component.css']
})
export class PrescribedComponent implements OnInit {

  username: any;
  user_id: any
  medication: any;
  patient: any;
  client_name!: any[];
  newArray!: any[];
  medic!: any[];


  constructor(private authService: UserService, config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  // open(content) {
  //   this.modalService.open(content, {
  //     size: 'xl',
  //   });
  // }
  ngOnInit(): void {

    this.username = localStorage.getItem('username')
    this.user_id = localStorage.getItem('user_id')
    // this.location = localStorage.getItem('location')

    this.authService.getPrescription().subscribe((res: any[]) => {
      this.client_name = res;
      this.newArray = this.client_name.filter(clienty => clienty.name === this.username)
      this.medic = this.newArray.reverse();
      this.medication = this.medic[0]

      if (this.medic[0] == undefined) {
        this.medication = [
          {
            status: "N/A", recomendations: "None"
          }
        ];
      }
    })
  }
  patients(patients: any) {
    throw new Error('Method not implemented.');
  }

}
