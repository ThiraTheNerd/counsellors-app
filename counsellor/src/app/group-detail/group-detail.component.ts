import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Groups } from '../shared/user.model';
import { CounsellorServiceService } from '../counsellor/counsellor-service.service';
import { TokenStorageService } from '../taken-storage.service';



@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {

  
  group!: Groups
  clients: string[] = [];
  messages: string[] = [];
  

  constructor(
    private route: ActivatedRoute,
    private heroService: CounsellorServiceService,
    private router: Router,
    private tokenStorage: TokenStorageService,
  ) { }

  ngOnInit(): void {
    this.getGroup();
  }


  getGroup(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getGroups(id)
      .subscribe(group => this.group = group);
    console.log(this.group);
    
  }

  // goBack(): void {
  //   this.location.back();
  // }

 

}






  

