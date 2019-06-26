import {Component} from '@angular/core';
import {LoginService} from "../shared/services/login/login.service";
import {FormControl, FormGroup} from "@angular/forms";
import {strings} from '../shared/utils/strings';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  strings = strings;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl("")
  });

  constructor(private loginService: LoginService) {
  }

  login($event: MouseEvent) {
    if (this.isLoginFormValid()) {
      this.loginService.login(this.loginForm.controls.email.value.trim());
    }
  }

  isLoginFormValid(): boolean {
    return this.isEmailValid();
  }

  isShowEmailAlert(): boolean {
    return this.loginForm.controls.email.dirty && !this.isEmailValid();
  }

  private isEmailValid(): boolean {
    return this.loginForm.controls.email.valid &&
      this.loginForm.controls.email.value != null &&
      this.loginForm.controls.email.value.trim().length > 0;
  }
}
