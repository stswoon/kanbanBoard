package nodomain.stswoon.kanbanboard.board;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;
import org.springframework.hateoas.Identifiable;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Data
@Table(name="Boards")
@NoArgsConstructor
@AllArgsConstructor
public class BoardEntity implements Identifiable<UUID> {
    @Id
    @Column(unique = true, nullable = false)
    @GeneratedValue
    @Type(type="uuid-char")
    private UUID id;
}
