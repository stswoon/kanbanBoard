package nodomain.stswoon.kanbanboard.board;


import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

interface BoardRepository extends CrudRepository<BoardEntity, UUID> {
}
