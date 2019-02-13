package nodomain.stswoon.kanbanboard.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import nodomain.stswoon.kanbanboard.ticket.TicketDto;
import org.springframework.lang.NonNull;

import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDto {
    @NonNull
    private UUID userId;
    @NonNull
    private UUID boardId;
    @NonNull
    private List<TicketDto> ticketDtos;
}

//todo make mapper skip null