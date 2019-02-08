package nodomain.stswoon.kanbanboard.board;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import nodomain.stswoon.kanbanboard.ticket.TicketDto;

import java.util.List;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BoardDto {
    private UUID id;
    private List<TicketDto> ticketDtos;
}
