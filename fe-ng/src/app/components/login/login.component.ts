import {Component} from '@angular/core';
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  email: string;

  constructor(private loginService: LoginService, private router: Router) {
  }

  login($event: MouseEvent) {
    if (this.isLoginFormValid()) {
      this.loginService.login(this.email.trim());
      this.router.navigate(['/'])
    }
  }

  isLoginFormValid() {
    return this.email != null && this.email.trim().length > 0;
  }
}
