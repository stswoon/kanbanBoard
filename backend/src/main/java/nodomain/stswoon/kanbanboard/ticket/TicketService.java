package nodomain.stswoon.kanbanboard.ticket;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class TicketService {
    private final TicketRepository ticketRepository;

    @Autowired
    public TicketService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    public @NonNull List<TicketEntity> getTickets(@NonNull UUID boardId) {
        return ticketRepository.findByBoardId(boardId);
    }

    public void saveAll(@NonNull List<TicketEntity> ticketEntities) {
        ticketRepository.saveAll(ticketEntities);
    }

    public void deleteAll(@NonNull List<TicketEntity> ticketEntities) {
        //in future delete by ids, but it need findByBoardId which returns only ids
        ticketRepository.deleteAll(ticketEntities);
    }

    public @NonNull TicketEntity save(@NonNull TicketEntity ticketEntity) {
        return ticketRepository.save(ticketEntity);
    }
}
