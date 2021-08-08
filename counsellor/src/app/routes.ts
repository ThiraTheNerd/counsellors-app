import { Routes } from '@angular/router'
import { ClientsComponent } from './clients/clients.component';
import { SignUpComponent } from './clients/sign-up/sign-up.component';
import { SignInComponent } from './clients/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { GroupsComponent } from './groups/groups.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { SidebarComponent } from './sidebar/sidebar.component';


export const appRoutes: Routes = [
    
    { path: 'home', component: HomeComponent },
    
    { path: 'sidebar', component: SidebarComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    {
        path: 'signup', component: ClientsComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: ClientsComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'client-profile', component: ClientProfileComponent },

    
    { path: 'groups', component: GroupsComponent },
    { path: 'appointments', component: AppointmentsComponent },

    { path: 'about', component: AboutComponent },

    { path: 'contact', component: ContactComponent },

    { path: '**', component: PagenotfoundComponent },

    { path: 'client-home', component: ClientHomeComponent },

    


];