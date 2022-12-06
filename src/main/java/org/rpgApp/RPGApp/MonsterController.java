package org.rpgApp.RPGApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import org.rpgApp.RPGApp.Monster;
import org.rpgApp.RPGApp.MonsterRepository;

import org.rpgApp.RPGApp.ChampRepo;
import org.rpgApp.RPGApp.Champion;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

//test
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class MonsterController {


    @Autowired
    MonsterRepository monsterRepo;


    @GetMapping("/monsters")
    public ResponseEntity<List<Monster>> getMonsters(){
        try{
            List<Monster> monsterList = new ArrayList<Monster>();

            monsterRepo.findAll().forEach(monsterList::add);

            if(monsterList.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(monsterList, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
