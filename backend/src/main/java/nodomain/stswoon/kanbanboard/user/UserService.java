package nodomain.stswoon.kanbanboard.user;

import lombok.extern.slf4j.Slf4j;
import nodomain.stswoon.kanbanboard.board.BoardEntity;
import nodomain.stswoon.kanbanboard.board.BoardService;
import nodomain.stswoon.kanbanboard.ticket.TicketEntity;
import org.apache.commons.lang3.tuple.Pair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Slf4j
@Service
public class UserService {
    private final UserRepository userRepository;
    private final BoardService boardService;

    @Autowired
    public UserService(UserRepository userRepository, BoardService boardService) {
        this.userRepository = userRepository;
        this.boardService = boardService;
    }

    public @NonNull UserEntity save(@NonNull UserEntity userEntity) {
        return userRepository.save(userEntity);
    }

    /**
     * Get or create user with empty board
     * @param userEmail
     * @return return user data and tickets
     */
    @Transactional  //todo??
    public @NonNull Pair<UserEntity, List<TicketEntity>> getUserTickets(@NonNull String userEmail) {
        UserEntity userEntity = userRepository.findByEmail(userEmail);
        if (userEntity == null) {
            log.info("Creating new user with email='{0}'", userEmail);
            BoardEntity boardEntity = new BoardEntity();
            boardEntity = boardService.save(boardEntity);
            userEntity = new UserEntity(null, userEmail, boardEntity.getId());
            userEntity = userRepository.save(userEntity);
            log.info("New user was created (email='{0}', id='{1}')", userEntity.getEmail(), userEntity.getId());
        }
        List<TicketEntity> ticketEntities = boardService.getTickets(userEntity.getBoardId());
        return Pair.of(userEntity, ticketEntities);
    }

    @Transactional  //todo??
    public void delete(@NonNull UUID userId) {
        UserEntity userEntity = userRepository.findById(userId).get();
        boardService.delete(userEntity.getBoardId());
        userRepository.deleteById(userId);
    }
}
