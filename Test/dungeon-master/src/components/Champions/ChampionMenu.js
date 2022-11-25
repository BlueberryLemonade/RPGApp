import ChampionList from "./ChampionList";
import ChampionForm from "./ChampionForm";
import { Link } from "react-router-dom";

const ChampionMenu = props => {


  

  

/*
  const deleteHandler = (championId) => {

    setChampions(prevChampions => {
      const updatedChampions = prevChampions.filter(champion => champion.name !== championId);
      return updatedChampions;
    })
  };
*/

  const formAndList = () => {
      return (
        <div>
          <ChampionForm  />
          <ChampionList  />

          <Link to="/"><button>Close Menu</button></Link>
        </div>
      );
    
  };

  

  return (
    <div>
      {formAndList()}
    </div>
  )

};


export default ChampionMenu;