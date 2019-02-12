// @flow

import React, {Component} from "react";
import {Button} from "antd";
import "./Board.less";
import {Ticket} from "../ticket/Ticket";

const columnTypes = ["BACKLOG", "IN_PROGRESS", "DONE"];

export class Board extends Component {
    render() {
        //todo: for optimization in future may be created BoardColumn component
        const columns = columnTypes.map(columnType => {
            const tickets = this.props.tickets
                .filter((ticket: TicketType) => ticket.status === columnType)
                .map((ticket: TicketType) => <Ticket {...ticket}/>);
            return (
                <div className={"board-column" + " _" + columnType.toLocaleLowerCase()}>
                    <div className="board-column__title">columnType.toLocaleLowerCase()</div>
                    <div className="board-column__tickets">{tickets}</div>
                </div>
            );
        });

        return (<div className="board">{columns}</div>);
    }
}

type TicketType = {
    id: string;
    name?: string;
    description?: string;
    dueDate?: string;
    status: "BACKLOG" | "IN_PROGRESS" | "DONE"; //todo make status backlog if null
};