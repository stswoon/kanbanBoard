import {Component} from '@angular/core';
import {LoginService} from "./login.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl("")
  });

  constructor(private loginService: LoginService, private router: Router) {
  }

  login($event: MouseEvent) {
    if (this.isLoginFormValid()) {
      this.loginService.login(this.loginForm.controls.email.value.trim());
      this.router.navigate(['/'])
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
