package org.rpgApp.RPGApp.repos;

import org.rpgApp.RPGApp.models.Monster;
import org.springframework.data.repository.CrudRepository;


public interface MonsterRepository extends CrudRepository<Monster, Integer> {
}
