package nodomain.stswoon.kanbanboard.board;


import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface BoardRepository extends CrudRepository<BoardEntity, UUID> {
}
