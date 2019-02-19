package nodomain.stswoon.kanbanboard.user;

import lombok.extern.slf4j.Slf4j;
import nodomain.stswoon.kanbanboard.board.BoardEntity;
import nodomain.stswoon.kanbanboard.board.BoardService;
import nodomain.stswoon.kanbanboard.ticket.TicketEntity;
import org.apache.commons.lang3.tuple.Pair;
import org.apache.commons.lang3.tuple.Triple;
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
     * Get user and tickets or create user with empty board
     * @return return user data and tickets
     */
    @Transactional //to make several SQL in one transaction
    public @NonNull Triple<UserEntity, BoardEntity, List<TicketEntity>> getUserAndBoard(@NonNull String userEmail) {
        UserEntity userEntity = userRepository.findByEmail(userEmail);
        BoardEntity boardEntity = null;
        if (userEntity == null) {
            log.info("Creating new user with email='{0}'", userEmail);
            userEntity = new UserEntity(null, userEmail);
            userEntity = userRepository.save(userEntity);
            boardEntity = new BoardEntity(null, userEntity.getId());
            boardEntity = boardService.save(boardEntity);
            log.info("New user was created (email='{0}', id='{1}', boardId='{2}')", userEntity.getEmail(), userEntity.getId(), boardEntity.getId());
        } else {
            log.info("Use existing user with email='{0}', id='{1}'", userEmail, userEntity.getId());
            boardEntity = boardService.getBoardByUser(userEntity.getId());
        }
        List<TicketEntity> ticketEntities = boardService.getTickets(boardEntity.getId());
        return Triple.of(userEntity, boardEntity, ticketEntities);
    }

    @Transactional
    public void delete(@NonNull UUID userId) {
        UserEntity userEntity = userRepository.findById(userId).get();
        boardService.deleteByUser(userEntity.getId());
        userRepository.deleteById(userId);
    }
}
