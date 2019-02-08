package nodomain.stswoon.kanbanboard.board;

import nodomain.stswoon.kanbanboard.ticket.TicketEntity;
import nodomain.stswoon.kanbanboard.ticket.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class BoardService {
    private final BoardRepository boardRepository;
    private final TicketService ticketService;

    @Autowired
    public BoardService(TicketService ticketService, BoardRepository boardRepository) {
        this.boardRepository = boardRepository;
        this.ticketService = ticketService;
    }

    public @NonNull List<TicketEntity> getTickets(@NonNull UUID boardId) {
        return ticketService.getTickets(boardId);
    }

    public void updateBoard(@NonNull UUID boardId, @NonNull List<TicketEntity> ticketEntities) {
        ticketEntities.forEach(ticketEntity -> ticketEntity.setBoardId(boardId));
        clear(boardId);
        ticketService.saveAll(ticketEntities);
    }

    public void clear(@NonNull UUID boardId) {
        List<TicketEntity> ticketEntities = ticketService.getTickets(boardId);
        ticketService.deleteAll(ticketEntities);
    }

    public @NonNull BoardEntity save(@NonNull BoardEntity boardEntity) {
        return boardRepository.save(boardEntity);
    }

    public void delete(@NonNull UUID boardId) {
        clear(boardId);
        boardRepository.deleteById(boardId);
    }
}
