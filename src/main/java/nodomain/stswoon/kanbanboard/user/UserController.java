package nodomain.stswoon.kanbanboard.user;

import lombok.extern.slf4j.Slf4j;
import nodomain.stswoon.kanbanboard.board.BoardController;
import nodomain.stswoon.kanbanboard.board.BoardDto;
import nodomain.stswoon.kanbanboard.board.BoardEntity;
import nodomain.stswoon.kanbanboard.board.BoardRepository;
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
@RequestMapping("/user")
public class UserController {
    private final UserRepository userRepository;
    private final BoardRepository boardRepository;
    private final BoardController boardController; //todo: service


    @Autowired
    public UserController(UserRepository userRepository, BoardRepository boardRepository, BoardController boardController) {
        this.userRepository = userRepository;
        this.boardRepository = boardRepository;
        this.boardController = boardController;
    }

    @RequestMapping(value = "/getBoard/{email}", method = GET)
    public BoardDto get(@PathVariable String email) {
        //todo logs
        UserEntity userEntity = userRepository.findByEmail(email);
        if (userEntity == null) {
            log.info("Creating new user");
            BoardEntity boardEntity = new BoardEntity();
            boardEntity = boardRepository.save(boardEntity);
            userEntity = new UserEntity(null, email, boardEntity.getId());
            userEntity = userRepository.save(userEntity);
            log.info("New user was created ({0}, {1})", userEntity.getEmail(), userEntity.getId());
        }
        BoardDto boardDto = boardController.get(userEntity.getBoardId());
        return boardDto;
    }

    @RequestMapping(value = "/{userId}", method = DELETE)
    public void clear(@PathVariable UUID userId) {
        UserEntity userEntity = userRepository.findById(userId).get();
        userRepository.deleteById(userId);
        boardController.clear(userEntity.getBoardId());
        boardRepository.deleteById(userEntity.getBoardId());
    }
}