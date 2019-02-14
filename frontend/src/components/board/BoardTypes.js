export type TicketStatus = "BACKLOG" | "IN_PROGRESS" | "DONE"; //todo make status backlog if null

export type TicketType = {
    id: string; //uuid
    name?: string;
    description?: string;
    dueDate?: string; //iso
    status: TicketStatus;
};