import { Routes } from '@angular/router'
import { ClientsComponent } from './clients/clients.component';
import { SignUpComponent } from './clients/sign-up/sign-up.component';
import { SignInComponent } from './clients/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
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