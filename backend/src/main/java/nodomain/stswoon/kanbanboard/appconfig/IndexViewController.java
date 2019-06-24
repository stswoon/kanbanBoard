package nodomain.stswoon.kanbanboard.appconfig;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexViewController {
    @RequestMapping("/")
    public String index() {
        return "index";
    }

    @RequestMapping("/angular")
    public String indexNg() {
        return "index-ng";
    }
}
