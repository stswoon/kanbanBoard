// @flow

import React, {Component} from "react";
import "./BoardColumn.less";
import {Ticket} from "../ticket/Ticket";


export class BoardColumn extends Component {
    render() {
        const tickets = this.props.tickets.map((ticket: TicketType) => <Ticket key={ticket.id} {...ticket}/>);
        return (
            <div className={"board-column" + " " + "_" + this.props.columnType.toLocaleLowerCase()}>
                <h4 className="board-column__title">{this.props.name}</h4>
                <div className="board-column__tickets">{tickets}</div>
            </div>
        );
    }
}