package nodomain.stswoon.kanbanboard.ticket;

import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.UUID;

//todo controller
interface TicketRepository extends CrudRepository<TicketEntity, UUID> {
    List<TicketEntity> findByBoardId(UUID boardId);
}
