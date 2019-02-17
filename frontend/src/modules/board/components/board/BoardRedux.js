import {strings} from "../../../shared/services/strings";
import {BoardService} from "./BoardService";
import {message} from "antd";

export const boardActions = {
    loadBoard,
    saveBoard,
    createTicket,
    saveTicket,
    removeTicket
};

const actionTypes = {
    BOARD_LOADING: "BOARD_LOADING",

    BOARD_STORE_TICKETS: "BOARD_STORE_TICKETS",
    BOARD_STORE_BOARD_ID: "BOARD_STORE_BOARD_ID",

    BOARD_CREATE_TICKET: "BOARD_CREATE_TICKET",
    BOARD_SAVE_TICKET: "BOARD_SAVE_TICKET",
    BOARD_REMOVE_TICKET: "BOARD_REMOVE_TICKET"
};

let loadingCount = 0;
const defaultSate = {tickets: [], loading: false};
export const boardReducer = (state = defaultSate, action) => {
    switch (action.type) {
        case actionTypes.BOARD_LOADING:
            loadingCount = action.loading ? loadingCount + 1 : loadingCount - 1;
            return {...state, loading: loadingCount !== 0};
        case actionTypes.BOARD_STORE_TICKETS:
            return {...state, tickets: action.tickets};
        case actionTypes.BOARD_STORE_BOARD_ID:
            return {...state, boardId: action.boardId};
        case actionTypes.BOARD_CREATE_TICKET:
            return {...state, operations: [action.ticket, ...state.tickets]};
        case actionTypes.BOARD_REMOVE_TICKET: {
            let tickets = state.tickets.filter(item => item.id !== action.id);
            return {...state, tickets};
        }
        case actionTypes.BOARD_SAVE_TICKET: {
            let tickets = state.tickets.map(item => {
                return item.id === action.ticket.id ? action.ticket : item;
            });
            return {...state, tickets};
        }
        default:
            return state;
    }
};

function loadBoard(userEmail) {
    console.info(`Getting tickets for '${userEmail}'`);
    return async (dispatch) => {
        dispatch(loading(true));
        try {
            let response = await BoardService.loadBoard(userEmail);
            dispatch(storeBoardId(response.boardId));
            dispatch(storeTickets(response.tickets));
        } catch (cause) {
            console.error(`Failed to get tickets for ${userEmail}`, cause);
            message.error(strings.systemErrorContactAdmin);
        }
        dispatch(loading(false));
    };
}

function saveBoard(userEmail, tickets) {
    console.info(`Saving tickets for '${userEmail}'`);
    return async (dispatch) => {
        dispatch(loading(true));
        try {
            await BoardService.saveBoard(userEmail, tickets);
            dispatch(storeTickets(tickets));
        } catch (cause) {
            console.error(`Failed to save tickets for ${userEmail}`, cause);
            message.error(strings.systemErrorContactAdmin);
        }
        dispatch(loading(false));
    };
}

function createTicket(userEmail, ticket) {
    console.info(`Create ticket for '${userEmail}' with data: ${ticket}`);
    return async (dispatch) => {
        dispatch(loading(true));
        try {
            let ticket = await BoardService.createTicket(userEmail, ticket);
            dispatch(_createTicket(ticket.id));
        } catch (cause) {
            console.error(`Failed to create ticket for ${userEmail}`, cause);
            message.error(strings.systemErrorContactAdmin);
        }
        dispatch(loading(false));
    };
}

function saveTicket(ticket) {
    console.info("Update ticket = '" + ticket.id + "' with data: ", ticket);
    return async (dispatch) => {
        dispatch(loading(true));
        try {
            await BoardService.saveTicket(ticket);
            dispatch(_saveTicket(ticket));
        } catch (cause) {
            console.error(`Failed to update ticket ${ticket.id}`, cause);
            message.error(strings.systemErrorContactAdmin);
        }
        dispatch(loading(false));
    };
}

function removeTicket(ticketId) {
    console.info(`Remove ticket '${ticketId}'`);
    return async (dispatch) => {
        dispatch(loading(true));
        try {
            await BoardService.removeTicket(ticketId);
            dispatch(_removeTicket(ticketId));
        } catch (cause) {
            console.error(`Failed to remove ticket ${ticketId}`, cause);
            message.error(strings.systemErrorContactAdmin);
        }
        dispatch(loading(false));
    };
}

//-----private api

function loading(loading) {
    return {type: actionTypes.BOARD_LOADING, loading};
}

//add first
function _createTicket(ticketId) {
    return {type: actionTypes.BOARD_CREATE_TICKET, ticket: {id: ticketId}};
}

function _saveTicket(ticket) {
    return {type: actionTypes.BOARD_SAVE_TICKET, ticket}
}

function _removeTicket(ticketId) {
    return {type: actionTypes.BOARD_REMOVE_TICKET, ticketId}
}

function storeTickets(tickets) {
    return {type: actionTypes.BOARD_STORE_TICKETS, tickets};
}

function storeBoardId(boardId) {
    return {type: actionTypes.BOARD_STORE_BOARD_ID, boardId};
}