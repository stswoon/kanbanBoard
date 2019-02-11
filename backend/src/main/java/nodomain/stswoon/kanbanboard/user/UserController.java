package nodomain.stswoon.kanbanboard.user;

import lombok.extern.slf4j.Slf4j;
import nodomain.stswoon.kanbanboard.board.BoardEntity;
import nodomain.stswoon.kanbanboard.ticket.TicketDto;
import nodomain.stswoon.kanbanboard.ticket.TicketEntity;
import org.apache.commons.lang3.tuple.Triple;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import static org.springframework.web.bind.annotation.RequestMethod.*;

@Slf4j
@RestController
@RequestMapping("/user")
class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(value = "/getUserAndBoard/{email}", method = GET)
    public UserDto get(@PathVariable String email) {
        log.info("Get user tickets by email '{0}'", email);
        Triple<UserEntity, BoardEntity, List<TicketEntity>> userTickets = userService.getUserAndBoard(email);
        UserEntity userEntity = userTickets.getLeft();
        BoardEntity boardEntity = userTickets.getMiddle();
        List<TicketDto> ticketDtos = userTickets.getRight().stream().map(TicketDto::valueOf).collect(Collectors.toList());
        UserDto userDto = new UserDto(userEntity.getId(), boardEntity.getId(), ticketDtos);
        return userDto;
    }

    @RequestMapping(value = "/{userId}", method = DELETE)
    public void delete(@PathVariable UUID userId) {
        log.info("Delete user by id='{0}'", userId);
        userService.delete(userId);
    }
}