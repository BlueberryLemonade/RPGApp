import './ArenaMenu.css';
import ArenaList from './ArenaList';
import { useState } from 'react';
import FightPit from './FightPit';
import { Link } from 'react-router-dom';

const ArenaMenu = props => {
 

  const[fightText, setFightText] = useState("All is peaceful currently");






  const arenaOptions = () => {
    return (
      <div>

       <p>{fightText}</p>


        <div className="monChampContainer">
          <p>Stuff</p>
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