import { Routes } from '@angular/router'
import { ClientsComponent } from './clients/clients.component';
import { SignUpComponent } from './clients/sign-up/sign-up.component';
import { SignInComponent } from './clients/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { GroupsComponent } from './groups/groups.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AuthGuard } from './auth/auth.guard';
export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'groups', component: GroupsComponent},
    { path: 'appointments', component: AppointmentsComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    
    {
        path: 'signup', component: ClientsComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: ClientsComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' }

];