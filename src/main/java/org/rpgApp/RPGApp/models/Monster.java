package org.rpgApp.RPGApp.models;

import javax.persistence.*;

@Entity
@Table(name = "monster")
public class Monster {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String name;
    private int hp;





    public int getId() {
        return id;
    }

    public void setChampId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getHp() {
        return hp;
    }

    public void setHp(int hp) {
        this.hp = hp;
    }



}
