import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


// import { Component, OnInit } from '@angular/core';
// import { TokenStorageService } from '../_services/token-storage.service';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent implements OnInit {
//   currentUser: any;

//   constructor(private token: TokenStorageService) { }

//   ngOnInit(): void {
//     this.currentUser = this.token.getUser();
//   }
// }
