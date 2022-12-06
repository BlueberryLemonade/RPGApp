import './ArenaMenu.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MonsterList from '../Monsters/MonsterList';
const ArenaMenu = props => {
 

  const[fightText, setFightText] = useState("All is peaceful currently");






  const arenaOptions = () => {
    return (
      <div>

       <p>{fightText}</p>


        <div className="monChampContainer">
          <h1>Monsters: </h1>
          <MonsterList />
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