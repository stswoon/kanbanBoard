package nodomain.stswoon.kanbanboard.board;

import org.springframework.data.repository.CrudRepository;
import org.springframework.lang.NonNull;

import java.util.List;
import java.util.UUID;

interface BoardRepository extends CrudRepository<BoardEntity, UUID> {
    List<BoardEntity> findByUserId(@NonNull UUID userId);
}
