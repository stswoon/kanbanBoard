export type TicketStatus = "BACKLOG" | "IN_PROGRESS" | "DONE";

export type UUID = string;
export type IsoDate = string;

export type Ticket = {
    id: UUID;
    boardId: UUID;
    name?: string;
    description?: string;
    dueDate?: IsoDate;
    status: TicketStatus;
    order: number
};

export const DROPPABLE_PREFIX = "droppable_";