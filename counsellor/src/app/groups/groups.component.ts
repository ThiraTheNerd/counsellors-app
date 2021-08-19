import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CounsellorServiceService } from '../counsellor/counsellor-service.service';
import { Groups, Users } from '../shared/user.model';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  userList: Users[] = [];
  newGroup: any = {
    name: null,
    description:null,
    client_name:null
  }
  
  constructor(private bookService: CounsellorServiceService,
    private counsellorService: CounsellorServiceService,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.counsellorService.getClientList().subscribe(
      data => {
        console.log(data)
        this.userList = data;
      }
    );
  }

  creategroup() {
    this.toastr.success("Group created succesfully")
    this.bookService.creategroups(this.newGroup).subscribe(data => {
      console.log(data)
    })

    
    window.location.reload();


  }


  addGroup(): void { }

  

}