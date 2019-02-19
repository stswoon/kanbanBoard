// @flow

import {HttpService} from "../../../shared/services/http";
import type {Ticket, UUID} from "../../BoardModels";

export const BoardService = {
    loadBoard: (userEmail: string): Promise => {
        return HttpService.send("get", "/user/getUserAndBoard/" + userEmail);
    },
    saveBoard: (boardId: UUID, tickets: Ticket[]): Promise => {
        return HttpService.send("put", "/board/" + boardId, {id: boardId, ticketDtos: tickets});
    },
    createTicket: (ticket: Ticket): Promise => {
        return HttpService.send("post", "/ticketEntities", ticket);
    },
    saveTicket: (ticket: Ticket): Promise => {
        return HttpService.send("put", "/ticketEntities/" + ticket.id, ticket);
    },
    removeTicket: (ticketId: UUID): Promise => {
        return HttpService.send("delete", "/ticketEntities/" + ticketId);
    }
};