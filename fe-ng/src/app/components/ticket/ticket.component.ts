import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IsoDate, Ticket, TicketStatus, UUID} from "../board/board.models";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

const debounce = require('lodash.debounce');

//https://alligator.io/angular/reactive-forms-valuechanges/
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.less']
})
export class TicketComponent implements OnChanges {
  @Input()
  ticket: Ticket;

  ticketForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ticketForm = this.formBuilder.group({
      name: "",
      description: ''
    });
    this.ticketForm.valueChanges.subscribe(val => console.log(val));
  }
}


// debounceHandleChange;
//
// handleChange = () => {
//   if (!this.debounceHandleChange) {
//     let f = () => {
//       this.props.onChange(utils.object.deepCopy(this.state));
//     };
//     f = f.bind(this);
//     this.debounceHandleChange = debounce(f, 500);
//   }
//   this.debounceHandleChange();
// }
