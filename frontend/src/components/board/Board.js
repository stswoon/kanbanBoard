// @flow

import React, {Component} from "react";
import "./Board.less";
import {BoardColumn} from "./BoardColumn";
import {strings} from "../../services/strings";
import {DragDropContext} from "react-beautiful-dnd";
import type {TicketStatus, TicketType} from "./BoardTypes";

const columnTypes: TicketStatus[] = ["BACKLOG", "IN_PROGRESS", "DONE"];

const setOrderForTickets = (tickets: TicketType[]): void => {
    tickets.forEach((ticket: TicketType, index: number) => ticket.order = index);
};

const reorderTickets = (tickets: TicketType[], startIndex, endIndex): TicketType[] => {
    const result = Array.from(tickets);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    setOrderForTickets(result);
    return result;
};

const getSortedTicketsByColumnType = (tickets: TicketType[], columnType: TicketStatus): TicketType[] => {
    return tickets
        .filter((ticket: TicketType) => ticket.status === columnType)
        .sort((t1: TicketType, t2: TicketType) => (t1.order || 0) - (t2.order || 0));
};

const moveTicketToDifferentColumn = (sourceTickets: TicketType[], destinationTickets: TicketType[],
                                     droppableSource, droppableDestination, newTicketStatus: TicketStatus) => {
    const sourceClone = Array.from(sourceTickets);
    const destClone = Array.from(destinationTickets);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    removed.status = newTicketStatus;
    destClone.splice(droppableDestination.index, 0, removed); //todo use insert
    setOrderForTickets(sourceClone);
    setOrderForTickets(destClone);
    const result = {
        sourceColumnTickets: sourceClone,
        destinationColumnTickets: destClone
    };
    return result;
};

const updateTickets = (tickets: TicketType[], newTickets: TicketType[]) => {
    const result = tickets.map((ticket: TicketType) => {
        const newTicket = newTickets.find((t: TicketType) => t.id === ticket.id);
        return newTicket ? newTicket : ticket;
    });
    return result;
};

export class Board extends Component {
    onDragEnd = ({source, destination}) => {
        if (!destination) {
            return; //dropped outside the board columns
        }

        if (source.droppableId === destination.droppableId) {
            //same column
            console.log("Move ticket inside same column");

            const columnType = source.droppableId.replace("droppable_", ""); //todo const dropable
            let columnTickets = getSortedTicketsByColumnType(this.props.tickets, columnType);
            columnTickets = reorderTickets(columnTickets, source.index, destination.index);
            const newTickets = updateTickets(this.props.tickets, columnTickets);
            this.props.onTicketPositionChange(newTickets);
        } else {
            //different column
            console.log("Move ticket to different column");

            const columnTypeSource = source.droppableId.replace("droppable_", "");
            const columnTypeDestination = destination.droppableId.replace("droppable_", "");
            let {sourceColumnTickets, destinationColumnTickets} = moveTicketToDifferentColumn(
                getSortedTicketsByColumnType(this.props.tickets, columnTypeSource),
                getSortedTicketsByColumnType(this.props.tickets, columnTypeDestination),
                source,
                destination,
                columnTypeDestination
            );
            const newTickets = updateTickets(this.props.tickets,
                sourceColumnTickets.concat(destinationColumnTickets));
            this.props.onTicketPositionChange(newTickets);
        }

    };

    render() {
        const columns = columnTypes.map((columnType: TicketStatus) => {
            const columnTickets = getSortedTicketsByColumnType(this.props.tickets, columnType);
            return (
                <BoardColumn key={columnType} columnType={columnType}
                             name={strings.board.columnTypes[columnType]}
                             tickets={columnTickets}/>
            );
        });
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="board">{columns}</div>
            </DragDropContext>
        );
    }
}