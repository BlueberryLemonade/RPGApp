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


    @GetMapping("/monsters/{id}")
    public ResponseEntity<Monster> getMonsterById(@PathVariable("id") int id){
        try{

            Optional<Monster> monsterCheck= monsterRepo.findById(id);

            if(monsterCheck.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }

            Monster selectedMonster = monsterCheck.get();

            return new ResponseEntity<>(selectedMonster, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/monsters")
    public ResponseEntity<HttpStatus> addMonster(@RequestBody Monster monster){
        try{
            monsterRepo.save(monster);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/monsters/{id}")
    public ResponseEntity<HttpStatus> deleteMonster(@PathVariable("id") int id){
        try{
            monsterRepo.deleteById(id);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/monsters/{id}")
    public ResponseEntity<Monster> updateMonster(@PathVariable int id,@RequestBody Monster monsterDetails) {
        Optional<Monster> updatedMonsterCheck = monsterRepo.findById(id);

        if(updatedMonsterCheck.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Monster updatedMonster = updatedMonsterCheck.get();

        updatedMonster.setName(monsterDetails.getName());
        updatedMonster.setHp(monsterDetails.getHp());

        monsterRepo.save(updatedMonster);



        return ResponseEntity.ok(updatedMonster);
    }



}
