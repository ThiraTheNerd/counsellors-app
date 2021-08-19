import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clients, Groups, Messages } from '../shared/user.model';
import { CounsellorServiceService } from '../counsellor/counsellor-service.service';
import { TokenStorageService } from '../taken-storage.service';



@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {

  
  group!: Groups
  clients!: Clients[]
  messages!: Messages[]
  

  constructor(
    private route: ActivatedRoute,
    private heroService: CounsellorServiceService,
    private router: Router,
    private tokenStorage: TokenStorageService,
  ) { }

  ngOnInit(): void {
    this.getGroup();
    console.log("Group")
  }


  getGroup(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getGroups(id)
      .subscribe(group => this.group = group);
    console.log(this.group);
    
  }




  getClients() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.heroService.getClients(id)
      .subscribe((clients: Clients[]) => {
        this.clients = clients
      })

  }

  getMessages() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getMessages(id)
      .subscribe((messages: Messages[]) => {
        this.messages = messages
      });
  }








  // getClients(): void {
  //   const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
  //   this.heroService.getClients(id)
  //     .subscribe(clients =>
  //       this.clients = clients
  //     );
  // }

  // getMessages(): void {
  //   const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
  //   this.heroService.getMessages(id)
  //     .subscribe(messages => this.messages = messages);
  // }




  // fetchClients() {
  //   const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10)
  //   return this.heroService.getClients(id).subscribe((data: {}) => {
  //     this.Clients = data;
  //   })
  // }
  // fetchMessages() {
  //   const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10)
  //   return this.heroService.getMessages(id).subscribe((res: {}) => {
  //     this.Messages = res;
  //   })
  // }

  // goBack(): void {
  //   this.location.back();
  // }

 

}






  

