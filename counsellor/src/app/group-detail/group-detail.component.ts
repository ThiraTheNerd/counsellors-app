import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Groups } from '../shared/user.model';
import { CounsellorServiceService } from '../counsellor/counsellor-service.service';



@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {
  group: Groups | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: CounsellorServiceService,
  ) { }

  ngOnInit(): void {
    this.getGroup();
  }


  getGroup(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getGroups(id)
      .subscribe(group => this.group = group);
  }

  // goBack(): void {
  //   this.location.back();
  // }

 

}






  

