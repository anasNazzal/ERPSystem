import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { loginComponent } from './login_component/login.component';
import { HomeComponent } from './home_component/home.component';
const app_routes:Routes=[

{
    path:'',
    component:HomeComponent,
    pathMatch: 'full' 
},

{
    path:'home',
    component:HomeComponent
}


]

export const routers:ModuleWithProviders =RouterModule.forRoot(app_routes);

