import { Component } from '@angular/core';

@Component({
  selector: 'login-component',
  templateUrl: '/app/login_component/login.component.html'
})
export class loginComponent  { 
loginData :any;

constructor(){

this.loginData={

  userCode:"",
  password:"",
  branchCode:""
};

}

SubmitLoginForm(value :any)
{
  console.log(value);
}


 }
