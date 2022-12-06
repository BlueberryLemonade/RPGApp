import ChampionList from "./MonsterList";
import ChampionForm from "./MonsterForm";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const MonsterMenu = props => {

  const fetchURL = 'http://localhost:8080/api/champions/';


  const [champions, setChampions] = useState([]);
  const [loading, setLoading] = useState(false);

  const [updated, setUpdated] = useState(false);
  


  
  useEffect(() => {
    setLoading(true);

    async function fetchData() {
    const request = await axios.get(fetchURL)
    .then(response => {
      setChampions(response.data);
    
    }
    );

    setLoading(false);
    setUpdated(false);
    return request;
} 
fetchData();
}, [updated]);



const changeHandler = () => {

 
  setUpdated(true);

}
  

/*
  const deleteHandler = (championId) => {

    setChampions(prevChampions => {
      const updatedChampions = prevChampions.filter(champion => champion.name !== championId);
      return updatedChampions;
    })
  };
*/

  const formAndList = () => {

    


if(loading){
  return <p>Loading...</p>
}

      return (
        <div>
          <ChampionList champions={champions} onChange={changeHandler}/>
          <ChampionForm onChange={changeHandler} />
          <Link to="/Champions/add"><button>Add Champion</button></Link>
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


export default MonsterMenu;