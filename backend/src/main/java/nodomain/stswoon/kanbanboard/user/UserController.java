package nodomain.stswoon.kanbanboard.user;

import lombok.extern.slf4j.Slf4j;
import nodomain.stswoon.kanbanboard.ticket.TicketDto;
import nodomain.stswoon.kanbanboard.ticket.TicketEntity;
import org.apache.commons.lang3.tuple.Pair;
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
@RequestMapping("/user") //todo rename to user entity
class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(value = "/getBoard/{email}", method = GET)
    public UserDto get(@PathVariable String email) {
        log.info("Get user tickets by email '{0}'", email);
        Pair<UserEntity, List<TicketEntity>> userTickets = userService.getUserTickets(email);
        UserEntity userEntity = userTickets.getKey();
        List<TicketDto> ticketDtos = userTickets.getValue().stream().map(TicketDto::valueOf).collect(Collectors.toList());
        UserDto userDto = new UserDto(userEntity.getId(), userEntity.getBoardId(), ticketDtos);
        return userDto;
    }

    @RequestMapping(value = "/{userId}", method = DELETE)
    public void delete(@PathVariable UUID userId) {
        log.info("Delete user by id='{0}'", userId);
        userService.delete(userId);
    }
}