package org.rpgApp.RPGApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
public class RPGController {



    @GetMapping("/home")
    public String homePage(Model model){
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
