import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Ticket} from "./board.models";
import {HttpService} from "../../services/http/http.service";
import {LoginService} from "../login/login.service";

@Injectable()
export class BoardService {
  constructor(private httpService: HttpService, private loginService: LoginService) {
  }

  getTickets(): Observable<Ticket[]> {
    return this.httpService.send<Ticket[]>("get", "/user/getUserAndBoard/" + this.loginService.getUserEmail());
  }
}
