import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/shared/user.model';
import { CounsellorServiceService } from '../counsellor-service.service';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css']
})
export class ClientlistComponent implements OnInit {

  constructor(private counsellorService: CounsellorServiceService,) { }

  userList!: Users[];

  ngOnInit(): void {

    this.counsellorService.getallusers().
      subscribe
      (
        data => {
          this.userList = data;

        })
    
  
  }

}
