package nodomain.stswoon.kanbanboard.ticket;

import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface TicketRepository extends CrudRepository<TicketEntity, UUID> {
    Iterable<TicketEntity> findByBoardId(UUID boardId);
}
