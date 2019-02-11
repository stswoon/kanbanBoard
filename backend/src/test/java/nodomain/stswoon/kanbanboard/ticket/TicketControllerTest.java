package nodomain.stswoon.kanbanboard.ticket;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.hamcrest.Matchers;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.UUID;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class TicketControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private TicketRepository ticketRepository;

    @Test
    public void createOperation() throws Exception {
        String ticketName = "test_709a9cc1-8433-466f-91bd-417aadb2c84e";
        TicketDto dto = new TicketDto(null, UUID.fromString("296809e8-8cfc-4c13-9d39-dd1a25fb791e"), ticketName, null, null, null);
        String requestBody = saveRequestJsonString(dto);

        MockHttpServletRequestBuilder request = MockMvcRequestBuilders
                .post("/ticketEntities")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestBody);

        ResultActions resultActions = mockMvc.perform(request);

        resultActions
                .andExpect((status().isCreated()));

        TicketEntity projectEntity = ticketRepository.findByName(ticketName);
        Assert.assertNotNull(projectEntity);
    }

    private final static ObjectMapper OBJECT_MAPPER = new ObjectMapper();

    private String saveRequestJsonString(Object object) throws JsonProcessingException {
        return OBJECT_MAPPER.writeValueAsString(object);
    }

}
