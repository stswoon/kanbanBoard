import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IsoDate, Ticket, TicketStatus, UUID} from "../board/board.models";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {debounce} from 'lodash.debounce';
import {strings} from "../../utils/strings";
import {ConfirmationService} from "primeng/api";
import {utils} from "../../utils/utils";

//https://alligator.io/angular/reactive-forms-valuechanges/
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.less']
})
export class TicketComponent implements OnChanges {
  strings = strings;

  @Input()
  ticket: Ticket;

  @Output()
  delete: EventEmitter<UUID> = new EventEmitter<UUID>();

  @Output()
  change: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  ticketForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private confirmationService: ConfirmationService) {
  }

  private debounceHandleChange: Function;

  private handleChange(value: Ticket) {
    if (!this.debounceHandleChange) {
      let f = () => {
        this.change.emit(utils.object.deepCopy(value));
      };
      f = f.bind(this);
      this.debounceHandleChange = debounce(f, 500);
    }
    this.debounceHandleChange();
  }


  ngOnChanges(changes: SimpleChanges): void {
    const ticket: Ticket = changes.ticket.currentValue;
    ticket.name = ticket.name || strings.ticket.noname;
    ticket.description = ticket.description || "";
    this.ticketForm = this.formBuilder.group({...ticket});
    this.ticketForm.valueChanges.subscribe((value: Ticket) => {
      console.debug("Change ticket: ", value);
      this.handleChange(value);
    });
  }

  confirmDelete() {
    this.confirmationService.confirm({
      accept: () => {
        this.delete.emit(this.ticket.id);
      }
    });
  }
}


