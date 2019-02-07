package nodomain.stswoon.kanbanboard.board;

import lombok.extern.slf4j.Slf4j;
import nodomain.stswoon.kanbanboard.ticket.TicketDto;
import nodomain.stswoon.kanbanboard.ticket.TicketEntity;
import nodomain.stswoon.kanbanboard.ticket.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static org.springframework.web.bind.annotation.RequestMethod.*;

@Slf4j
@RestController
@RequestMapping("/board")
public class BoardController {
    private final TicketRepository ticketRepository;

    @Autowired
    public BoardController(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    @RequestMapping(value = "/{boardId}", method = GET)
    public BoardDto get(@PathVariable UUID boardId) {
        Iterable<TicketEntity> ticketEntities = ticketRepository.findByBoardId(boardId);
        List<TicketDto> ticketDtos = StreamSupport.stream(ticketEntities.spliterator(), false)
                .map(ticketEntity -> new TicketDto(ticketEntity.getId(), ticketEntity.getName(), ticketEntity.getDescription(), ticketEntity.getDueDate(), ticketEntity.getStatus()))
                .collect(Collectors.toList());
        return new BoardDto(ticketDtos);
    }

    @RequestMapping(value = "/{boardId}", method = PUT)
    public void update(@PathVariable UUID boardId, @RequestBody BoardDto boardDto) {
        this.clear(boardId);
        Iterable<TicketEntity> ticketEntities = boardDto.getTicketDtos().stream()
                .map(ticketDto -> new TicketEntity(ticketDto.getId(), boardId, ticketDto.getName(), ticketDto.getDescription(), ticketDto.getDueDate(), ticketDto.getStatus()))
                .collect(Collectors.toList());
        ticketRepository.saveAll(ticketEntities);
    }

    @RequestMapping(value = "/clear/{boardId}", method = DELETE)
    public void clear(@PathVariable UUID boardId) {
        Iterable<TicketEntity> ticketEntities = ticketRepository.findByBoardId(boardId);
        ticketRepository.deleteAll(ticketEntities); //.deleteByIds()
    }
}