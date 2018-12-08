import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../components/component-app/app.component';
import { LoginComponent } from '../components/component-login/login.component';
import { HomeComponent } from '../components/component-home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NotAvaliableComponent } from '../components/component-not-available/not-avaliable.component';
import { ShortcutComponent } from '../components/component-shortcut/shortcut.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotAvaliableComponent,
    ShortcutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
