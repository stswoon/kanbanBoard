package nodomain.stswoon.kanbanboard;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexViewController {
    @RequestMapping("/")
    public String index() {
        return "index";
    }
}
