package org.rpgApp.RPGApp.models;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name = "campaigns")
public class Campaign {

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private int id;

        private String name;
        private String description;

        private ArrayList<Monster> monsterDatabase = new ArrayList<>();
        private ArrayList<Champion> championDatabase = new ArrayList<>();

        public String getName() {
            return name;
        }

        public String getDescription() {
            return description;
        }

        public ArrayList<Monster> getMonsterDatabase() {
            return monsterDatabase;
        }

        public ArrayList<Champion> getChampionDatabase() {
            return championDatabase;
        }

        public void setName(String name) {
            this.name = name;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public void setMonsterDatabase(ArrayList<Monster> monsterDatabase) {
            this.monsterDatabase = monsterDatabase;
        }

        public void setChampionDatabase(ArrayList<Champion> championDatabase) {
            this.championDatabase = championDatabase;
        }
    }
