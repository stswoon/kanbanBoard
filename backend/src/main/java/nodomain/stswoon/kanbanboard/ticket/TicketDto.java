package nodomain.stswoon.kanbanboard.ticket;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;

import javax.validation.constraints.Null;
import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TicketDto {
    @NonNull
    private UUID id;
    @Nullable
    private UUID boardId;
    @Nullable
    private String name;
    @Nullable
    private String description;
    @Nullable
    private Date dueDate;
    @NonNull
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
