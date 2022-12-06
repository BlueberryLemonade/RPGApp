import './ArenaMenu.css';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import MonsterList from '../Monsters/MonsterList';
import ChampionList from '../Champions/ChampionList';
const ArenaMenu = props => {
 

  // const[fightText, setFightText] = useState("All is peaceful currently");






  const arenaOptions = () => {
    return (
      <div>

       <p>FIGHT</p>


        <div className="monChampContainer">
          <h1>Monsters: </h1>
          <MonsterList />
          <h1>Champions: </h1>
          <ChampionList />
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