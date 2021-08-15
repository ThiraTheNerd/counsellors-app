// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Router } from '@angular/router';
// import { UserService } from 'src/app/shared/user.service';
// import { TokenStorageService } from 'src/app/taken-storage.service';


// @Component({
//   selector: 'app-sign-in',
//   templateUrl: './sign-in.component.html',
//   styleUrls: ['./sign-in.component.css']
// })
// export class SignInComponent implements OnInit {
//   form: any = {
//     email: null,
//     password: null
//   };
//   isLoggedIn = false;
//   isLoginFailed = false;
//   errorMessage = '';
//   role: string[] = [];

//   constructor(private userService: UserService,
//     private router: Router,
//     private tokenStorage: TokenStorageService) { }

//   ngOnInit(): void {
//     if (this.tokenStorage.getToken()) {
//       this.isLoggedIn = true;
//       this.role = this.tokenStorage.getUser().role;

//     }

//     this.form = {
//       email: '',
//       password: '',
//     }
//   }

//   onSubmit(signInForm: NgForm): void {
//     const { email, password } = this.form;

//     this.userService.login(email, password).subscribe(
//       data => {
//         this.tokenStorage.saveToken(data.accessToken);
//         this.tokenStorage.saveUser(data);

//         // this.isLoginFailed = false;
//         // this.isLoggedIn = true;
//         if ((data['role']) == "is_client") {
//           console.log(data['role'])
//           this.router.navigate(['client-home']);

//         }
//         else {
//           this.router.navigate(['sidebar']);
//         }

//       },

//       err => {
//         this.errorMessage = err.error.message;
//         this.isLoginFailed = true;
//       }
//     );
//   }

//   reloadPage(): void {
//     window.location.reload();
//   }

// }