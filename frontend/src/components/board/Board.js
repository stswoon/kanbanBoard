// @flow

import React, {Component} from "react";
import "./Board.less";
import {BoardColumn} from "./BoardColumn";
import {strings} from "../../services/strings";

const columnTypes: TicketStatus[] = ["BACKLOG", "IN_PROGRESS", "DONE"];

//todo https://www.npmjs.com/package/react-dnd
export class Board extends Component {
    render() {
        const columns = columnTypes.map((columnType: TicketStatus) => {
            const tickets = this.props.tickets.filter((ticket: TicketType) => ticket.status === columnType);
            return (
                <BoardColumn key={columnType} columnType={columnType} name={strings.board.columnTypes[columnType]}
                             tickets={tickets}/>
            );
        });
        return (<div className="board">{columns}</div>);
    }
}