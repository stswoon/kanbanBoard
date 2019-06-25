import {Injectable} from '@angular/core';

const emailKey = "email";

@Injectable()
export class LoginService {

  constructor() {
  }

  public login(email: string): void {
    localStorage.setItem(emailKey, email);
  }

  public isLogged(): boolean {
    return localStorage.getItem(emailKey) != null;
  }

  public logout(): void {
    localStorage.removeItem(emailKey);
  }
}
