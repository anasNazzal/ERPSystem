import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import { loginComponent }  from './login_component/login.component';
import {HomeComponent} from './home_component/home.component';
import{routers} from './App.routing';

@NgModule({
  imports:      [ BrowserModule,FormsModule,routers ],
  declarations: [ AppComponent ,loginComponent,HomeComponent],
  bootstrap:    [ AppComponent ]
})  
export class AppModule { }
