package org.rpgApp.RPGApp;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class RPGController {

    @GetMapping("/home")
    public String homePage(){
    return "home";
    }

    @GetMapping("/game")
    public String gamePage(){
        return "game";
    }

    @GetMapping("/tools")
    public String toolPage(){
        return "tools";
    }

    @GetMapping("/createchampion")
    public String createPage(){
        return "createchampion";
    }


}
