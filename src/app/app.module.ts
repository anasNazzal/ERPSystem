import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import { loginComponent }  from './login_component/login.component';


@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent ,loginComponent],
  bootstrap:    [ AppComponent ]
})  
export class AppModule { }
