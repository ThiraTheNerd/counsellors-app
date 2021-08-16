import { Component, OnInit } from '@angular/core';
import { CounsellorServiceService } from '../counsellor/counsellor-service.service';
import { Groups } from '../shared/user.model';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  newGroup = new Groups("", "", 0);
  constructor(private bookService: CounsellorServiceService) { }

  ngOnInit(): void {
  }

  creategroup() {
    this.bookService.creategroups(this.newGroup).subscribe(data => {
      console.log(data)
    })
  }


  addGroup(): void { }

}