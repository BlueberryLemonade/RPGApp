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
public class RPGController {


    @Autowired
    ChampRepo champRepo;

    @Autowired
    MonsterRepository monsterRepo;

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

    @GetMapping("/champions/{id}")
    public ResponseEntity<Champion> getChampById(@PathVariable("id") int id){
        try{

            Optional<Champion> champCheck= champRepo.findById(id);

            if(champCheck.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }

            Champion selectedChamp = champCheck.get();

            return new ResponseEntity<>(selectedChamp, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/champions")
    public ResponseEntity<HttpStatus> addChamp(@RequestBody Champion champ){
        try{
            champRepo.save(champ);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/champions/{id}")
    public ResponseEntity<HttpStatus> deleteChamp(@PathVariable("id") int id){
        try{
            champRepo.deleteById(id);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/champions/{id}")
    public ResponseEntity<Champion> updateEmployee(@PathVariable int id,@RequestBody Champion champDetails) {
        Optional<Champion> updatedChampCheck = champRepo.findById(id);

        if(updatedChampCheck.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Champion updatedChamp = updatedChampCheck.get();
                
        updatedChamp.setName(champDetails.getName());
        updatedChamp.setHp(champDetails.getHp());

        champRepo.save(updatedChamp);



        return ResponseEntity.ok(updatedChamp);
    }


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
