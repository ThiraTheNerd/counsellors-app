import { Component, OnInit } from '@angular/core';
import { CounsellorServiceService } from '../counsellor/counsellor-service.service';
import { Groups } from '../shared/user.model';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent implements OnInit {

 

  username: any;
  groups: Groups[] = [];


  constructor(private heroService: CounsellorServiceService) { }

  // ngOnInit(): void {

  //   this.username = localStorage.getItem('username')

  // }
  ngOnInit() {
    this.getGroups();
  }

  getGroups(): void {
    this.heroService.getGroup()
      .subscribe(groups => this.groups = groups);
  }

  

}
