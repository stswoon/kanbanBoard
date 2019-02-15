// @flow

import React, {Component} from "react";
import "./BoardColumn.less";
import {Ticket} from "../ticket/Ticket";
import type {TicketType} from "./BoardTypes";
import {Draggable, Droppable} from "react-beautiful-dnd";


//DnD: https://codesandbox.io/s/ql08j35j3q, also see part in Board
export class BoardColumn extends Component {
    render() {
        const tickets = this.props.tickets.map((ticket: TicketType, index: number) => {
            return (
                <Draggable key={ticket.id} draggableId={ticket.id} index={index}>
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <Ticket {...ticket}/>
                        </div>
                    )}
                </Draggable>
            )
        });
        return (
            <div className={"board-column" + " " + "_" + this.props.columnType.toLocaleLowerCase()}>
                <h4 className="board-column__title">{this.props.name}</h4>
                <Droppable droppableId={"droppable_" + this.props.columnType}>
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
}