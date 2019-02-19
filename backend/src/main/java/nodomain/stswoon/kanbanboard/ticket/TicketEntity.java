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
@Table(name = "Tickets")
public class TicketEntity implements Identifiable<UUID> {
    @Id
    @Column(unique = true, nullable = false)
    @GeneratedValue
    @Type(type = "uuid-char")
    private UUID id;
    @Column(nullable = false)
    @Type(type = "uuid-char")
    private UUID boardId;
    @Column
    private String name;
    @Column(length = 1000)
    private String description;
    @Column(columnDefinition = "TIMESTAMP WITH TIME ZONE")
    //@Temporal(TemporalType.TIMESTAMP) //https://www.baeldung.com/hibernate-date-time
    private Date dueDate;
    @Column
    private TicketStatus status;
    @Column
    private int orderInBoard; //order is reserved
}
