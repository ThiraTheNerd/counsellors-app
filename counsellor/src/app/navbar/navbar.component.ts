import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../taken-storage.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;

  username!: string;


  constructor(private http: HttpClient,
    private router: Router,
    private tokenStorageService: TokenStorageService
    
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();

      this.username = user.username;
      
    }
  }

  signOut(): void {
    localStorage.clear();
    this.router.navigate(['/']);

  }
  

}
