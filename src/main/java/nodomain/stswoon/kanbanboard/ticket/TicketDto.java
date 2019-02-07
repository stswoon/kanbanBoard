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
    private String name;
    private String description;
    private Date dueDate;
    private TicketStatus status;
}
