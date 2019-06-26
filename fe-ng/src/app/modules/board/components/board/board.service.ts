import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Ticket} from "./board.models";
import {HttpService} from "../../../shared/services/http/http.service";
import {LoginService} from "../../../shared/services/login/login.service";
import {map} from "rxjs/operators";

@Injectable()
export class BoardService {
  constructor(private httpService: HttpService, private loginService: LoginService) {
  }

  getTickets(): Observable<Ticket[]> {
    return this.httpService.send<Ticket[]>("get", "/user/getUserAndBoard/" + this.loginService.getUserEmail())
      .pipe(map((data:any) => {
        return data.ticketDtos;
      }));
  }
}
