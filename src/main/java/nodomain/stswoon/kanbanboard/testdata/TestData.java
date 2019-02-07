package nodomain.stswoon.kanbanboard.testdata;

import lombok.extern.slf4j.Slf4j;
import nodomain.stswoon.kanbanboard.board.BoardEntity;
import nodomain.stswoon.kanbanboard.board.BoardRepository;
import nodomain.stswoon.kanbanboard.ticket.TicketEntity;
import nodomain.stswoon.kanbanboard.ticket.TicketRepository;
import nodomain.stswoon.kanbanboard.ticket.TicketStatus;
import nodomain.stswoon.kanbanboard.user.UserEntity;
import nodomain.stswoon.kanbanboard.user.UserRepository;
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
    private final BoardRepository boardRepository;
    private final UserRepository userRepository;
    private final TicketRepository ticketRepository;

    @Autowired
    public TestData(UserRepository userRepository, TicketRepository ticketRepository, BoardRepository boardRepository) {
        this.boardRepository = boardRepository;
        this.userRepository = userRepository;
        this.ticketRepository = ticketRepository;
    }

    @PostConstruct
    public void initTestData() {
        final UUID boardId = boardRepository.save(new BoardEntity()).getId();


        userRepository.save(new UserEntity(null, "alex@test.com", boardId));


        ticketRepository.save(new TicketEntity(null, boardId, "Requirements", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                createDate(7, 2, 2019), TicketStatus.DONE));
        ticketRepository.save(new TicketEntity(null, boardId, "Design", "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                createDate(8, 2, 2019), TicketStatus.DONE));
        ticketRepository.save(new TicketEntity(null, boardId, "Backend", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                createDate(9, 2, 2019), TicketStatus.IN_PROGRESS));
        ticketRepository.save(new TicketEntity(null, boardId, "Frontend", "Lorem ipsum dolor sit amet",
                null, TicketStatus.IN_PROGRESS));
        ticketRepository.save(new TicketEntity(null, boardId, "Test", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                createDate(10, 2, 2019), TicketStatus.BACKLOG));
        ticketRepository.save(new TicketEntity(null, boardId, "Docs", null, null, TicketStatus.BACKLOG));
        ticketRepository.save(new TicketEntity(null, boardId, "Demo", null, null, null));
        ticketRepository.save(new TicketEntity(null, boardId, "Code review + fix todos", null, null, null));
        ticketRepository.save(new TicketEntity(null, boardId, null, null, null, null));
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
