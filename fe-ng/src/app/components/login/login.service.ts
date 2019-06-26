import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

const emailKey = "email";

@Injectable()
export class LoginService {

  constructor(private router: Router) {
  }

  public login(email: string): void {
    localStorage.setItem(emailKey, email);
    this.router.navigate(['/']);
  }

  public isLogged(): boolean {
    return localStorage.getItem(emailKey) != null;
  }

  public getUserEmail(): string {
    return localStorage.getItem(emailKey);
  }

  public logout(): void {
    localStorage.removeItem(emailKey);
    this.router.navigate(['/login']);
  }
}
