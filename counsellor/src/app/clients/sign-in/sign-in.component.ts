import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { TokenStorageService } from 'src/app/taken-storage.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role: string[] = [];

  constructor(private userService: UserService,
    private router: Router,
    private tokenStorage: TokenStorageService,
    private toastr: ToastrService,
  
  ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.role = this.tokenStorage.getUser().role;
      
    }

    this.form = {
      email: '',
      password: '',
      username:''
    }
  }

  onSubmit(signInForm: NgForm): void {
    const { email, password } = this.form;

    this.userService.login(email, password).subscribe(
      data => {
        // sessionStorage.setItem('user_id', data.user_id);
        // // var data = sessionStorage.getItem('id');
        // console.log(data);


        this.tokenStorage.saveUser(data.email);
        this.tokenStorage.saveUser(data.username)
        this.tokenStorage.saveUser(data.role);
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        console.log(data.authenticatedUser["role"]);

        // this.isLoginFailed = false;
        // this.isLoggedIn = true;
        if (data.authenticatedUser['role'] === "is_counsellor") {
          this.toastr.success("SignIn succesfully")
          this.router.navigate(['counsellor']);
          
        }
        else {
          this.toastr.success("SignIn succesfully")
          this.router.navigate(['home']);
        }
    
      },
      
      err => {
        this.toastr.warning("SignIn fail, please provide correct login credentials")
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}