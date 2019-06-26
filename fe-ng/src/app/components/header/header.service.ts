import {Injectable} from '@angular/core';
import {LoginService} from "../login/login.service";

@Injectable()
export class HeaderService {
  private loading: boolean = false;

  constructor(private loginService: LoginService) {
  }

  getUserEMail(): string {
    return this.loginService.getUserEmail();
  }

  logout(): void {
    this.loginService.logout();
  }

  isLoading(): boolean {
    return this.loading;
  }

  setLoading(flag: boolean): void {
    this.loading = flag;
  }
}
