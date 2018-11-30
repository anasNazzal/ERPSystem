import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submited: boolean = false
  wrongCredentials : boolean = false

  /* ********************************************************************************************
	 *                                       INITIALIZATION                                       *
	 **********************************************************************************************/

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    localStorage.clear();
    this.loginForm = this.fb.group({
      userCode: ['', Validators.required],
      password: ['', Validators.required],
      branchCode: ['', Validators.required],
      data: ['', Validators.required]
    });
  }

  /* ********************************************************************************************
	 *                                        FORM ACTIONS                                        *
	 **********************************************************************************************/

  login() {
    this.submited = true;
    if (this.loginForm.valid && this.backendMock(this.loginForm.value)) {
      this.loginService.getTestStatus(this.loginForm.value).subscribe(data => {
        localStorage.setItem("userToken", "token_" + this.loginForm.get('userCode').value);
        localStorage.setItem("userData", JSON.stringify(data));
        this.router.navigate(['/home']);
      })
    }
  }

  cancel() {
    this.submited = false;
    this.wrongCredentials = false;
  }

  /* ********************************************************************************************
	 *                                        VALIDATION                                          *
	 **********************************************************************************************/

  get userCodeInvalid() {
    let control = this.loginForm.get('userCode');
    return this.submited && control.invalid;
  }

  get passwordInvalid() {
    let control = this.loginForm.get('password');
    return this.submited && control.invalid;
  }
  get branchCodeInvalid() {
    let control = this.loginForm.get('branchCode');
    return this.submited && control.invalid;
  }

  get dataInvalid() {
    let control = this.loginForm.get('data');
    return this.submited && control.invalid;
  }

  /* ********************************************************************************************
	 *                                       MOCK BACKEND                                         *
	 **********************************************************************************************/

  backendMock(user: User): boolean {
    if (this.loginService.users[user.userCode] == user.password) {
      return true;
    } else {
      this.wrongCredentials = true;
      return false;
    }
  }



}
