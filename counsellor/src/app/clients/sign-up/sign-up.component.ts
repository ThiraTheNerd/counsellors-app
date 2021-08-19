import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user.service';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user!: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  form: any = {
    username: null,
    email: null,
    firstName: null,
    lastName: null,
    password: null,
    role: "is_client",
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, lastName, firstName, password, role, is_counsellor, is_client } = this.form;

    this.userService.register(username, email, firstName, lastName, password, role).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.toastr.success('Signup Successful proceed to login')
        this.router.navigate(['/login']);
        
      },
      err => {
        this.toastr.warning('Something went wrong', 'Error')
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}