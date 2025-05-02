import { Routes } from '@angular/router';
import { SearchUserComponent } from './pages/search-user/search-user.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'search-user', component: SearchUserComponent},
    {path: '**', redirectTo: 'home'}
];
