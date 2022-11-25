import { useState } from "react";
import ChampionList from "./ChampionList";
import ChampionForm from "./ChampionForm";
import { Link } from "react-router-dom";


const ChampionMenu = props => {

  const [champions, setChampions] = useState(props.champions);

  const deleteHandler = (championId) => {

    setChampions(prevChampions => {
      const updatedChampions = prevChampions.filter(champion => champion.name !== championId);
      return updatedChampions;
    })
  };

  const formAndList = () => {
      return (
        <div>
          <ChampionForm onChampionAdded={addChampionHandler} />
          <ChampionList champions={champions} onDeleteClick={deleteHandler} />
          <button type='button' onClick={props.onSave(champions)} >Save Champions</button>

          <Link to="/"><button>Close Menu</button></Link>
        </div>
      );
    
  };

  const addChampionHandler = (champion) => {

    setChampions((prevChampions) => {
      return [champion, ...prevChampions];
    });
  };

  return (
    <div>
      {formAndList()}
    </div>
  )

};


export default ChampionMenu;