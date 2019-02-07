package nodomain.stswoon.kanbanboard.board;

import lombok.Data;
import org.springframework.hateoas.Identifiable;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Data
@Table(name="Boards")
public class BoardEntity implements Identifiable<UUID> {
    @Id
    @Column(unique = true, nullable = false)
    @GeneratedValue
    private UUID id;
}
