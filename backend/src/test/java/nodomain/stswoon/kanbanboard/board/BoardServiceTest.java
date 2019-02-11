package nodomain.stswoon.kanbanboard.board;

import nodomain.stswoon.kanbanboard.ticket.TicketService;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.UUID;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class BoardServiceTest {
    @Mock
    private BoardRepository boardRepository;
    @Mock
    private TicketService ticketService;

    @Test
    public void testGetBoardByUser() {
        BoardEntity er = new BoardEntity(null, null);
        UUID userId = UUID.fromString("60d5c145-821d-44d9-99ac-f9f55d8390c7");
        when(boardRepository.findByUserId(userId)).thenReturn(Collections.singletonList(er));

        BoardService boardService = new BoardService(ticketService, boardRepository);
        BoardEntity ar = boardService.getBoardByUser(userId);
        Assert.assertEquals(er, ar);
    }

    @Test(expected = IllegalStateException.class)
    public void testGetBoardByUserWithError() {
        when(boardRepository.findByUserId(any())).thenReturn(Collections.emptyList());
        BoardService boardService = new BoardService(ticketService, boardRepository);
        boardService.getBoardByUser(any());
    }
}
