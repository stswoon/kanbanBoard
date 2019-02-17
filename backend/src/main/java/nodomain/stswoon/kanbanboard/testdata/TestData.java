package nodomain.stswoon.kanbanboard.testdata;

import lombok.extern.slf4j.Slf4j;
import nodomain.stswoon.kanbanboard.board.BoardEntity;
import nodomain.stswoon.kanbanboard.board.BoardService;
import nodomain.stswoon.kanbanboard.ticket.TicketEntity;
import nodomain.stswoon.kanbanboard.ticket.TicketService;
import nodomain.stswoon.kanbanboard.ticket.TicketStatus;
import nodomain.stswoon.kanbanboard.user.UserEntity;
import nodomain.stswoon.kanbanboard.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Calendar;
import java.util.Date;
import java.util.TimeZone;
import java.util.UUID;

@Slf4j
@Component
public class TestData {
    private final BoardService boardService;
    private final UserService userService;
    private final TicketService ticketService;

    @Autowired
    public TestData(BoardService boardService, UserService userService, TicketService ticketService) {
        this.boardService = boardService;
        this.userService = userService;
        this.ticketService = ticketService;
    }

    @PostConstruct
    public void initTestData() {
        final UUID userIdId = userService.save(new UserEntity(null, "alex@test.com")).getId();

        final UUID boardId = boardService.save(new BoardEntity(UUID.fromString("296809e8-8cfc-4c13-9d39-dd1a25fb791e"), userIdId)).getId();

        ticketService.save(new TicketEntity(null, boardId, "Requirements", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                createDate(7, 2, 2019), TicketStatus.DONE, 0));
        ticketService.save(new TicketEntity(null, boardId, "Design", "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                createDate(8, 2, 2019), TicketStatus.DONE, 0));
        ticketService.save(new TicketEntity(null, boardId, "Backend", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                createDate(9, 2, 2020), TicketStatus.IN_PROGRESS, 0));
        ticketService.save(new TicketEntity(null, boardId, "Frontend", "Lorem ipsum dolor sit amet",
                null, TicketStatus.IN_PROGRESS, 0));
        ticketService.save(new TicketEntity(null, boardId, "Test", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                createDate(10, 3, 2019), TicketStatus.BACKLOG, 0));
        ticketService.save(new TicketEntity(null, boardId, "Docs", null, null, TicketStatus.BACKLOG, 0));
        ticketService.save(new TicketEntity(null, boardId, "Demo", null, null, TicketStatus.BACKLOG, 0));
        ticketService.save(new TicketEntity(null, boardId, "Code review + fix todos", null, null, TicketStatus.BACKLOG, 0));
        ticketService.save(new TicketEntity(null, boardId, null, null, null, TicketStatus.IN_PROGRESS, 0));
    }

    private Date createDate(int dayInMonth, int month, int year) {
        TimeZone tz = TimeZone.getTimeZone("UTC");
        Calendar calendar = Calendar.getInstance(tz);
        calendar.setLenient(false);
        calendar.set(year, month, dayInMonth, 0, 0, 0);
        calendar.set(Calendar.MILLISECOND, 0);
        return new Date(calendar.getTime().getTime());
    }
}
