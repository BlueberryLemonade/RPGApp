import './ArenaMenu.css';
import ArenaList from './ArenaList';
import { useState } from 'react';
import FightPit from './FightPit';
import { Link } from 'react-router-dom';

const ArenaMenu = props => {
  const[selectedChampion, setSelectedChampions] = useState("");
  const[selectedMonster, setSelectedMonster] = useState("");
  const[fightText, setFightText] = useState("All is peaceful currently");

  const champSearch = (name) => {
    return name.name === selectedChampion;
  }

  const monsterSearch = (name) => {
    return name.name === selectedMonster;
  }


  const fightHandler = () => {
    const champIndex = props.champions.findIndex(champSearch);
    const enemyIndex = props.monsters.findIndex(monsterSearch);

    const enemy = props.monsters[enemyIndex];
    const champ = props.champions[champIndex];
    setFightText(champ.strength + " Damage is done to " + enemy.name + " and " + enemy.strength + " Damage is done to " + champ.name);
  };


  const selectionHandler = (event) => {

    switch(event.target.parentElement.className){
      case "Champions" : setSelectedChampions(event.target.textContent);
      break;
      case "Monsters" : setSelectedMonster(event.target.textContent);
      break;
      default :
    } 
  }




  const arenaOptions = () => {
    return (
      <div>
       <FightPit selectedMonster={selectedMonster} selectedChampion={selectedChampion} />

       <p>{fightText}</p>

        <button onClick={fightHandler}>Fight</button>


        <div className="monChampContainer">
          <div className="arenaMonsters">
            <ArenaList onSelected={selectionHandler} className="Monsters" database={props.monsters} />
          </div>
          <ArenaList onSelected={selectionHandler} className="Champions" database={props.champions} />
        </div>

        <Link to="/"><button>Close Arena</button></Link>
      </div>
    );
  };

  return (
    <div>
      {arenaOptions()}
    </div>
  )
}

export default ArenaMenu;