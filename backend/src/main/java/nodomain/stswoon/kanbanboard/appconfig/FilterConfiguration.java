package nodomain.stswoon.kanbanboard.appconfig;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.filter.ShallowEtagHeaderFilter;
import org.springframework.web.servlet.resource.ResourceUrlEncodingFilter;

import javax.servlet.Filter;

@Configuration
public class FilterConfiguration {
    @Bean
    public ResourceUrlEncodingFilter resourceUrlEncodingFilter() {
        return new ResourceUrlEncodingFilter();
    }

    @Bean
    public Filter filter() {
        return new ShallowEtagHeaderFilter();
    }
}
