package nodomain.stswoon.kanbanboard.ticket;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;
import org.springframework.hateoas.Identifiable;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Tickets")
public class TicketEntity implements Identifiable<UUID> {
    @Id
    @Column(unique = true, nullable = false)
    @GeneratedValue
    @Type(type="uuid-char")
    private UUID id;
    @Column(nullable = false)
    @Type(type="uuid-char")
    private UUID boardId; //todo: see https://gigsterous.github.io/engineering/2016/09/25/spring-boot-2.html
    @Column
    private String name;
    @Column
    private String description;
    @Column
    private Date dueDate;
    @Column
    private TicketStatus status;
    @Column
    private int order;
}
