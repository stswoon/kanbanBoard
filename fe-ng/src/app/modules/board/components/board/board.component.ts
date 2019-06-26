//https://alligator.io/angular/drag-drop/

import {Component, OnDestroy, OnInit} from '@angular/core';
import {columnTypes, Ticket, TicketStatus, UUID} from "./board.models";
import {strings} from "../../../shared/utils/strings";
import {BoardService} from "./board.service";
import {Subscription} from "rxjs";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

const updateTickets = (tickets: Ticket[], newTickets: Ticket[]): Ticket[] => {
  const result = tickets.map((ticket: Ticket) => {
    const newTicket = newTickets.find((t: Ticket) => t.id === ticket.id);
    return newTicket ? newTicket : ticket;
  });
  return result;
};

const setOrderForTickets = (tickets: Ticket[]): void => {
  tickets.forEach((ticket: Ticket, index: number) => ticket.order = index);
};

const setTicketsStatus = (tickets: Ticket[], columnType: TicketStatus): void => {
  tickets.forEach((ticket: Ticket, index: number) => ticket.status = columnType);
};

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

  onTrackDrop(event: CdkDragDrop<TicketStatus[], any>): void {
    //moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    //no need here
  }

  onTicketDrop(event: CdkDragDrop<Ticket[], any>): void {
    console.log("onTicketDrop");
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

    setTicketsStatus(event.container.data, <TicketStatus>event.container.id);
    setOrderForTickets(event.container.data);
    const newTickets = updateTickets(this.tickets, event.container.data);
    this.boardService.updateTickets(newTickets);
  }

  deleteTicket(ticketId: UUID): void {
    this.boardService.removeTicket(ticketId);
  }

  changeTicket(ticket: Ticket): void {
    this.boardService.saveTicket(ticket);
  }

  addTicket(): void {
    this.boardService.addTicket();
  }
}
