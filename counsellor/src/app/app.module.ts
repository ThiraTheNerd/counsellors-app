import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { SignInComponent } from './clients/sign-in/sign-in.component';
import { SignUpComponent } from './clients/sign-up/sign-up.component';
import { CounsellorComponent } from './counsellor/counsellor.component';

import { FormsModule } from '@angular/forms';
import { UserService } from './shared/user.service';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { ToastrModule } from 'ngx-toastr';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GroupsComponent } from './groups/groups.component';
import { AppointmentsComponent } from './appointments/appointments.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    SignInComponent,
    SignUpComponent,
    CounsellorComponent,
    HomeComponent,
    SidebarComponent,
    GroupsComponent,
    AppointmentsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
