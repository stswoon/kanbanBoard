// @flow

import React, {Component} from "react";
import "./BoardColumn.less";
import {TicketCard} from "../ticket/TicketCard";
import type {Ticket, TicketStatus, UUID} from "../../BoardModels";
import {Draggable, Droppable} from "react-beautiful-dnd";
import {Button} from "antd";
import {DROPPABLE_PREFIX} from "../../BoardModels";

type Props = {
    columnType: TicketStatus,
    tickets: Ticket[],
    onTicketCreate: () => void,
    onTicketRemove: (ticketId: UUID) => void,
    onTicketChange: (ticket: Ticket) => void
};

//DnD: https://codesandbox.io/s/ql08j35j3q, also see part in Board.js
export class BoardColumn extends Component<Props> {
    render() {
        const tickets = this.props.tickets.map((ticket: Ticket, index: number) => {
            return (
                <Draggable key={ticket.id} draggableId={ticket.id} index={index}>
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <TicketCard {...ticket} onRemove={this.handleRemove} onChange={this.handleTicketChange}/>
                        </div>
                    )}
                </Draggable>
            )
        });
        return (
            <div className={"board-column _" + this.props.columnType.toLocaleLowerCase()}>
                <h4 className="board-column__title">
                    {this.props.name}
                    {this.props.createFlag && <Button className="board-column__add-ticket" type="primary" icon="plus"
                                                      onClick={this.handleCreateTicket}/>}
                </h4>

                <Droppable droppableId={DROPPABLE_PREFIX + this.props.columnType}>
                    {(provided) => {
                        return (
                            <div ref={provided.innerRef} className="board-column__tickets">
                                {tickets}
                                {provided.placeholder}
                            </div>);
                    }}
                </Droppable>
            </div>
        );
    }

    handleCreateTicket = () => {
        this.props.onTicketCreate();
    };

    handleRemove = (ticketId) => {
        this.props.onTicketRemove(ticketId);
    };

    handleTicketChange = (ticket) => {
        this.props.onTicketChange(ticket);
    };
}