package org.rpgApp.RPGApp.controllers;

import org.rpgApp.RPGApp.models.Campaign;
import org.rpgApp.RPGApp.repos.CampaignRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.rpgApp.RPGApp.models.Monster;
import org.rpgApp.RPGApp.repos.MonsterRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class CampaignController {

    @Autowired
    CampaignRepo campaignRepo;

    @GetMapping("/campaigns")
    public ResponseEntity<List<Campaign>> getMonsters() {
        try {

            List<Campaign> campaignList = new ArrayList<Campaign>();
            campaignRepo.findAll().forEach(campaignList::add);

            if (campaignList.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(campaignList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}