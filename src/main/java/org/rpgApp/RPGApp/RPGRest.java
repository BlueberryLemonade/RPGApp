package org.rpgApp.RPGApp;

import org.rpgApp.RPGApp.models.Champion;
import org.rpgApp.RPGApp.repos.ChampRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class RPGRest {

    @Autowired
    ChampRepo champDB;

    @GetMapping("/allchamps")
    public List<Champion> findAllChamps(){
        List<Champion> all = new ArrayList<>();
        champDB.findAll().forEach(all::add);
        return all;
    }

    @PostMapping("/createchampion")
    public Champion saveChamp(@Validated @RequestBody Champion champ){
        return champDB.save(champ);
    }


}
