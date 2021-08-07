import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  form: any = {
    username: null,
    email: null,
    firstName: null,
    lastName: null,
    password: null,

  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { password, firstName, lastName, username, email, } = this.form;

    this.userService.register(username, email, firstName, lastName, password).subscribe(
      (      data: any) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      (      err: { error: { message: string; }; }) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}