package org.rpgApp.RPGApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import org.rpgApp.RPGApp.ChampRepo;
import org.rpgApp.RPGApp.Champion;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class RPGController {


    @Autowired
    ChampRepo champRepo;



    @GetMapping("/home")
    public String homePage(Model model){
    return "home";
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping("/champions")
    public ResponseEntity<List<Champion>> getChamps(){
        try{
            List<Champion> champList = new ArrayList<Champion>();

            champRepo.findAll().forEach(champList::add);

            if(champList.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(champList, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
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
