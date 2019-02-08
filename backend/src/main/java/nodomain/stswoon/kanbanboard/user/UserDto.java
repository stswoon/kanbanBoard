package nodomain.stswoon.kanbanboard.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import nodomain.stswoon.kanbanboard.ticket.TicketDto;

import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDto {
    private UUID userId;
    private UUID boardId;
    private List<TicketDto> ticketDtos;
}
