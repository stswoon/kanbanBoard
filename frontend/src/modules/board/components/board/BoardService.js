import {HttpService} from "../../../shared/services/http";

export const BoardService = {
    loadBoard: (userEmail) => {
        return HttpService.send("get", "/user/getUserAndBoard/" + userEmail);
    },
    saveBoard: (boardId, tickets) => {
        return HttpService.send("put", "/board/" + boardId, {id: boardId, ticketDtos: tickets});
    },
    createTicket: (ticket) => {
        return HttpService.send("post", "/ticketEntities", ticket);
    },
    saveTicket: (ticket) => {
        return HttpService.send("put", "/ticketEntities/" + ticket.id, ticket);
    },
    removeTicket: (ticketId) => {
        return HttpService.send("delete", "/ticketEntities/" + ticketId);
    }
};