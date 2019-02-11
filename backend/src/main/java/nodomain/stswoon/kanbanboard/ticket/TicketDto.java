package nodomain.stswoon.kanbanboard.ticket;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TicketDto {
    private UUID id;
    private UUID boardId;
    private String name;
    private String description;
    private Date dueDate;
    private TicketStatus status;

    //compromise
    public static TicketDto valueOf(TicketEntity entity) {
        return new TicketDto(entity.getId(), entity.getBoardId(), entity.getName(), entity.getDescription(), entity.getDueDate(), entity.getStatus());
    }

    //compromise
    public static TicketEntity toEntity(TicketDto dto) {
        return new TicketEntity(dto.getId(), dto.getBoardId(), dto.getName(), dto.getDescription(), dto.getDueDate(), dto.getStatus());
    }

}
