package nodomain.stswoon.kanbanboard.board;

import lombok.extern.slf4j.Slf4j;
import nodomain.stswoon.kanbanboard.ticket.TicketDto;
import nodomain.stswoon.kanbanboard.ticket.TicketEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import static org.springframework.web.bind.annotation.RequestMethod.*;

@Slf4j
@RestController
@RequestMapping("/board")
class BoardController {
    private final BoardService boardService;

    @Autowired
    public BoardController(BoardService boardService) {
        this.boardService = boardService;
    }

    @RequestMapping(value = "/{boardId}", method = GET)
    public BoardDto get(@PathVariable UUID boardId) {
        log.info("Get board by id='{0}'", boardId);
        List<TicketDto> ticketDtos = boardService.getTickets(boardId).stream()
                .map(TicketDto::valueOf).collect(Collectors.toList());
        return new BoardDto(boardId, ticketDtos);
    }

    @RequestMapping(value = "/{boardId}", method = PUT)
    public void update(@PathVariable UUID boardId, @RequestBody BoardDto boardDto) {
        log.info("Update all board by id='{0}'", boardId);
        List<TicketEntity> ticketEntities = boardDto.getTicketDtos().stream()
                .map(TicketDto::toEntity).collect(Collectors.toList());
        boardService.updateBoard(boardId, ticketEntities);
    }

    @RequestMapping(value = "/clear/{boardId}", method = DELETE)
    public void clear(@PathVariable UUID boardId) {
        log.info("Clear board by id='{0}'", boardId);
        boardService.clear(boardId);
    }
}