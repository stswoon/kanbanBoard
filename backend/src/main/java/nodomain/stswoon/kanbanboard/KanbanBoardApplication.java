package nodomain.stswoon.kanbanboard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.filter.ShallowEtagHeaderFilter;

import javax.servlet.Filter;

@SpringBootApplication
public class KanbanBoardApplication {

    public static void main(String[] args) {
        SpringApplication.run(KanbanBoardApplication.class, args);
    }

    @Bean
    public Filter filter() {
        ShallowEtagHeaderFilter filter = new ShallowEtagHeaderFilter();
        return filter;
    }
}

