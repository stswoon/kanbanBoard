package nodomain.stswoon.kanbanboard.ticket;

import org.springframework.data.repository.CrudRepository;
import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;

import java.util.List;
import java.util.UUID;

//public need to use oob spring controller
public interface TicketRepository extends CrudRepository<TicketEntity, UUID> {
    @NonNull List<TicketEntity> findByBoardId(@NonNull UUID boardId);

    @Nullable TicketEntity findByName(@NonNull String ticketName);
}
