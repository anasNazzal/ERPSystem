import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/component-home/home.component';
import { LoginComponent } from '../components/component-login/login.component';
import { NotAvaliableComponent } from '../components/component-not-available/not-avaliable.component';
import { ShortcutComponent } from '../components/component-shortcut/shortcut.component';

import { AuthGuard } from "../guards/auth.guard";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'modules', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: ShortcutComponent },
      { path: '**', component: NotAvaliableComponent }
    ]
  },
  { path: '', redirectTo: '/modules', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
