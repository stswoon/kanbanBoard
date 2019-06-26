//https://alligator.io/angular/drag-drop/

import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {columnTypes, Ticket, TicketStatus} from "./board.models";
import {strings} from "../../utils/strings";
import {BoardService} from "./board.service";
import {Observable, Subscription} from "rxjs";
import {filter, map} from "rxjs/operators";
import {CdkDragDrop} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.less']
})
export class BoardComponent implements OnInit, OnDestroy {
  columnTypes = columnTypes;

  private tickets: Ticket[] = [];
  private ticketSubscription: Subscription;

  constructor(private boardService: BoardService) {
  }

  ngOnInit(): void {
    this.ticketSubscription = this.boardService.getTickets().subscribe(tickets => this.tickets = tickets);
  }

  ngOnDestroy(): void {
    if (this.ticketSubscription) {
      this.ticketSubscription.unsubscribe();
    }
  }

  getColumnName(columnType: TicketStatus) {
    return strings.board.columnTypes[columnType];
  }

  getSortedTicketsByColumnType = (tickets: Ticket[], columnType: TicketStatus): Ticket[] => {
    return tickets
      .filter((ticket: Ticket) => ticket.status === columnType)
      .sort((t1: Ticket, t2: Ticket) => (t1.order || 0) - (t2.order || 0));
  };

  getTickets(columnType: TicketStatus): Ticket[] {
    return this.getSortedTicketsByColumnType(this.tickets, columnType);
  }

  onTrackDrop($event: CdkDragDrop<TicketStatus[], any>) {

  }

  onTicketDrop($event: CdkDragDrop<Ticket[], any>) {

  }

}
