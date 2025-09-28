import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent },
    { path: 'profile', component: ProfileComponent, data: { name: 'Rajib Shaw' } },
    { path: 'user/:id/:name', component: UserComponent },
    { path: '**', component: Page404Component }
];
