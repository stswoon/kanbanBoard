// @flow

import React, {Component} from "react";
import "./Board.less";
import {BoardColumn} from "../boardcolumn/BoardColumn";
import {strings} from "../../../shared/services/strings";
import {DragDropContext} from "react-beautiful-dnd";
import type {TicketStatus, Ticket, UUID} from "../../BoardModels";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {boardActions} from "./BoardRedux";
import {DROPPABLE_PREFIX} from "../../BoardModels";

const columnTypes: TicketStatus[] = ["BACKLOG", "IN_PROGRESS", "DONE"];

const setOrderForTickets = (tickets: Ticket[]): void => {
    tickets.forEach((ticket: Ticket, index: number) => ticket.order = index);
};

const reorderTickets = (tickets: Ticket[], startIndex, endIndex): Ticket[] => {
    const result = Array.from(tickets);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    setOrderForTickets(result);
    return result;
};

const getSortedTicketsByColumnType = (tickets: Ticket[], columnType: TicketStatus): Ticket[] => {
    return tickets
        .filter((ticket: Ticket) => ticket.status === columnType)
        .sort((t1: Ticket, t2: Ticket) => (t1.order || 0) - (t2.order || 0));
};

const moveTicketToDifferentColumn = (sourceTickets: Ticket[], destinationTickets: Ticket[],
                                     droppableSource, droppableDestination, newTicketStatus: TicketStatus): any => {
    const sourceClone = Array.from(sourceTickets);
    const destClone = Array.from(destinationTickets);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    removed.status = newTicketStatus;
    destClone.splice(droppableDestination.index, 0, removed); //mayby better use insert
    setOrderForTickets(sourceClone);
    setOrderForTickets(destClone);
    const result = {
        sourceColumnTickets: sourceClone,
        destinationColumnTickets: destClone
    };
    return result;
};

const updateTickets = (tickets: Ticket[], newTickets: Ticket[]): Ticket[] => {
    const result = tickets.map((ticket: Ticket) => {
        const newTicket = newTickets.find((t: Ticket) => t.id === ticket.id);
        return newTicket ? newTicket : ticket;
    });
    return result;
};

type Props = {
    userEmail: string,
    tickets: Ticket[],
    boardId: string,
    loading: boolean,
    actions: {
        createTicket: (ticket: Ticket) => void,
        removeTicket: (ticketId: UUID) => void,
        saveTicket: (ticket: Ticket) => void,
        saveBoard: (tickets: Ticket[]) => void
    }
};

//just for BoardTest.js
export class SimpleBoard extends Component<Props> {
    componentDidUpdate(prevProps) {
        if (this.props.userEmail !== prevProps.userEmail) {
            this.props.actions.loadBoard(this.props.userEmail);
        }
    }

    componentDidMount() {
        if (this.props.userEmail) {
            this.props.actions.loadBoard(this.props.userEmail);
        }
    }

    render() {
        if (!this.props.userEmail) {
            return <div>{strings.board.emptyEmail}</div>;
        }

        const columns = columnTypes.map((columnType: TicketStatus) => {
            const columnTickets = getSortedTicketsByColumnType(this.props.tickets, columnType);
            const createFlag = columnType === "BACKLOG";
            return (
                <BoardColumn key={columnType} columnType={columnType}
                             name={strings.board.columnTypes[columnType]}
                             tickets={columnTickets} createFlag={createFlag}
                             onTicketCreate={this.handleTicketCreate}
                             onTicketRemove={this.handleTicketRemove}
                             onTicketChange={this.handleTicketChange}
                />
            );
        });
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="board">{columns}</div>
            </DragDropContext>
        );
    }

    handleTicketCreate = (): void => {
        const ticket = {boardId: this.props.boardId, status: "BACKLOG"};
        this.props.actions.createTicket(ticket);
    };

    handleTicketRemove = (ticketId: UUID): void => {
        this.props.actions.removeTicket(ticketId);
    };

    handleTicketChange = (ticket: Ticket): void => {
        this.props.actions.saveTicket(ticket);
    };

    handleTicketPositionChange = (tickets: Ticket[]): void => {
        this.props.actions.saveBoard(this.props.boardId, tickets);
    };

    onDragEnd = ({source, destination}) => {
        if (!destination) {
            return; //dropped outside the board columns
        }

        if (source.droppableId === destination.droppableId) {
            //same column
            console.log("Move ticket inside same column");

            const columnType = source.droppableId.replace(DROPPABLE_PREFIX, "");
            let columnTickets = getSortedTicketsByColumnType(this.props.tickets, columnType);
            columnTickets = reorderTickets(columnTickets, source.index, destination.index);
            const newTickets = updateTickets(this.props.tickets, columnTickets);
            this.handleTicketPositionChange(newTickets);
        } else {
            //different column
            console.log("Move ticket to different column");

            const columnTypeSource = source.droppableId.replace(DROPPABLE_PREFIX, "");
            const columnTypeDestination = destination.droppableId.replace(DROPPABLE_PREFIX, "");
            let {sourceColumnTickets, destinationColumnTickets} = moveTicketToDifferentColumn(
                getSortedTicketsByColumnType(this.props.tickets, columnTypeSource),
                getSortedTicketsByColumnType(this.props.tickets, columnTypeDestination),
                source,
                destination,
                columnTypeDestination
            );
            const newTickets = updateTickets(this.props.tickets,
                sourceColumnTickets.concat(destinationColumnTickets));
            this.handleTicketPositionChange(newTickets);
        }
    };
}

function mapStateToProps(state) {
    const {boardReducer, loginReducer} = state;
    return {
        userEmail: loginReducer.userEmail,
        boardId: boardReducer.boardId,
        tickets: boardReducer.tickets,
        loading: boardReducer.loading
    };
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(boardActions, dispatch)};
}

const connected = connect(mapStateToProps, mapDispatchToProps)(SimpleBoard);
export {connected as Board};