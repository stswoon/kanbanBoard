import {Injectable} from '@angular/core';
import {LoginService} from "../shared/services/login/login.service";
import {LoadingService} from "../shared/services/loading/loading.service";

@Injectable()
export class HeaderService {
  private loading: boolean = false;

  constructor(private loginService: LoginService, private loadingService: LoadingService) {
  }

  getUserEMail(): string {
    return this.loginService.getUserEmail();
  }

  logout(): void {
    this.loginService.logout();
  }

  isLoading(): boolean {
    return this.loadingService.isLoading();
  }

  setLoading(flag: boolean): void {
    this.loadingService.setLoading(flag);
  }
}
