import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

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

import { SidebarComponent } from '././sidebar/sidebar.component';
import { GroupsComponent } from './groups/groups.component';
import { AppointmentsComponent } from './appointments/appointments.component';

import { NavbarComponent } from './navbar/navbar.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';

import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactComponent } from './contact/contact.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { authInterceptorProviders } from './auth/auth.interceptor';
import { CounsellorServiceService } from './counsellor/counsellor-service.service';
import { ClientlistComponent } from './counsellor/clientlist/clientlist.component';
import { MedicationComponent } from './medication/medication.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { GroupchatComponent } from './groupchat/groupchat.component';
import { PrescribedComponent } from './prescribed/prescribed.component';
import { CounsellorInputComponent } from './counsellor-input/counsellor-input.component';



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
    NavbarComponent,
    ClientProfileComponent,
    AboutComponent,
    PagenotfoundComponent,
    ContactComponent,
    ClientHomeComponent,
    ClientlistComponent,
    MedicationComponent,
    GroupDetailComponent,
    AppointmentDetailsComponent,
    UpdateAppointmentComponent,
    GroupchatComponent,
    PrescribedComponent,
    CounsellorInputComponent,
  
    
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [authInterceptorProviders, UserService],

  bootstrap: [AppComponent]
})
export class AppModule { }
