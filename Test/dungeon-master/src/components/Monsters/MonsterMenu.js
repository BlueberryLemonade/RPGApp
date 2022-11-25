import { useState } from "react";
import MonsterList from "./MonsterList";
import MonsterForm from "./MonsterForm";
import { Link } from "react-router-dom";




const MonsterMenu = props => {

  const [monsters, setMonsters] = useState(props.monsters);


  const deleteHandler = (monsterId) => {

    setMonsters(prevMonsters => {
      const updatedMonsters = prevMonsters.filter(monster => monster.name !== monsterId);
      return updatedMonsters;
    })
  };



  const formAndList = () => {
   
      return (
        <div>
          <MonsterForm onMonsterAdded={addMonsterHandler} />
          <MonsterList monsters={monsters} onDeleteClick={deleteHandler} />
          <button type='button' onClick={props.onSave(monsters)} >Save Monsters</button>
          <Link to="/"><button type='button' >Close Menu</button></Link>
        </div>
      );

  };


  const addMonsterHandler = (monster) => {

    setMonsters((prevMonsters) => {
      return [monster, ...prevMonsters];
    });
  };


  return (
    <div>
      {formAndList()}
    </div>
  )

};


export default MonsterMenu;