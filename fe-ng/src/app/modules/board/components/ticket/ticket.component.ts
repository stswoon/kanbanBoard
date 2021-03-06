import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {Ticket, UUID} from "../board/board.models";
import {FormBuilder, FormGroup} from "@angular/forms";
import * as lodash from "lodash";
import {strings} from "../../../shared/utils/strings";
import {ConfirmationService} from "primeng/api";
import {utils} from "../../../shared/utils/utils";
import * as moment from 'moment'

//https://alligator.io/angular/reactive-forms-valuechanges/
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.less'],
  // encapsulation: ViewEncapsulation.None
})
export class TicketComponent implements OnChanges {
  strings = strings;

  @Input()
  ticket: Ticket;

  @Output()
  delete: EventEmitter<UUID> = new EventEmitter<UUID>();

  @Output()
  changeTicket: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  ticketForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private confirmationService: ConfirmationService) {
  }

  private debounceHandleChange: Function;

  private handleChange() {
    if (!this.debounceHandleChange) {
      let f = () => {
        this.changeTicket.emit(utils.object.deepCopy(this.ticket));
      };
      f = f.bind(this);
      this.debounceHandleChange = lodash.debounce(f, 500);
    }
    this.debounceHandleChange();
  }


  ngOnChanges(changes: SimpleChanges): void {
    const ticket: Ticket = changes.ticket.currentValue;
    ticket.name = ticket.name || strings.ticket.noname;
    ticket.description = ticket.description || "";
    // ticket.dueDate = moment(ticket.dueDate) || null;
    const dueDate: Date = ticket.dueDate == null ? null : moment(ticket.dueDate).toDate();
    this.ticketForm = this.formBuilder.group({...ticket, dueDate});
    this.ticketForm.valueChanges.subscribe((value: Ticket) => {
      value.dueDate = value.dueDate == null ? null : moment(value.dueDate).toISOString();
      console.debug("Change ticket: ", value);
      this.ticket = value;
      this.handleChange();
    });
  }

  confirmDelete() {
    this.confirmationService.confirm({
      header: strings.ticket.areYouSure,
      message: strings.ticket.remove,
      acceptLabel: strings.ticket.remove,
      rejectLabel: strings.ticket.cancel,
      accept: () => {
        this.delete.emit(this.ticket.id);
      }
    });
  }
}


