package nodomain.stswoon.kanbanboard.board;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import nodomain.stswoon.kanbanboard.ticket.TicketDto;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BoardDto {
    private List<TicketDto> ticketDtos;
}
