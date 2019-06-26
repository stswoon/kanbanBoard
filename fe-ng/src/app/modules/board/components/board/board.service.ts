import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject, Subject, Subscription} from "rxjs";
import {Ticket, UUID} from "./board.models";
import {HttpService} from "../../../shared/services/http/http.service";
import {LoginService} from "../../../shared/services/login/login.service";
import {LoadingService} from "../../../shared/services/loading/loading.service";

interface UserAndBoardResponse {
  boardId: UUID;
  ticketDtos: Ticket[];
  userId: UUID;
}

@Injectable()
export class BoardService implements OnDestroy {
  private subscriptions: Subscription[] = [];
  private tickets: Ticket[];
  private $tickets: Subject<Ticket[]> = new BehaviorSubject<Ticket[]>([]);
  private boardId: UUID;

  constructor(private httpService: HttpService,
              private loginService: LoginService,
              private loadingService: LoadingService) {
  }

  private setTickets(tickets: Ticket[]): void {
    this.tickets = tickets;
    this.$tickets.next(tickets);
  }

  getTickets(): Observable<Ticket[]> {
    if (this.tickets == null) {
      this.subscriptions.push(this.httpService.send<UserAndBoardResponse>("get", "/user/getUserAndBoard/" + this.loginService.getUserEmail())
        .subscribe((response: UserAndBoardResponse) => {
          this.setTickets(response.ticketDtos);
          this.boardId = response.boardId;
        }));
    }
    return this.$tickets;
  }

  removeTicket(ticketId: UUID): void {
    this.loadingService.setLoading(true);
    this.subscriptions.push(this.httpService.send("delete", "/ticketEntities/" + ticketId).subscribe(() => {
      const tickets = this.tickets.filter(item => item.id !== ticketId);
      this.setTickets(tickets);
      this.loadingService.setLoading(false);
    }));
  }

  saveTicket(ticket: Ticket) {
    this.loadingService.setLoading(true);
    this.subscriptions.push(this.httpService.send("put", "/ticketEntities/" + ticket.id, ticket).subscribe(() => {
      this.loadingService.setLoading(false);
    }));
  }

  addTicket(): void {
    const newTicket: Ticket = <Ticket>{boardId: this.boardId, status: "BACKLOG"};
    this.loadingService.setLoading(true);
    this.subscriptions.push(this.httpService.send("post", "/ticketEntities", newTicket).subscribe((ticket: Ticket) => {
      const tickets: Ticket[] = [ticket, ...this.tickets];
      this.setTickets(tickets);
      this.loadingService.setLoading(false);
    }));
  }

  updateTickets(tickets: Ticket[]): void {
    this.loadingService.setLoading(true);
    this.subscriptions.push(this.httpService.send("put", "/board/" + this.boardId, {id: this.boardId, ticketDtos: tickets}).subscribe(() => {
      this.setTickets(tickets);
      this.loadingService.setLoading(false);
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    this.subscriptions = [];
  }
}
