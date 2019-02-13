package nodomain.stswoon.kanbanboard.board;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import nodomain.stswoon.kanbanboard.ticket.TicketDto;
import org.springframework.lang.NonNull;

import java.util.List;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BoardDto {
    @NonNull
    private UUID id;
    @NonNull
    private List<TicketDto> ticketDtos;
}
