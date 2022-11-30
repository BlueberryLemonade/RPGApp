import ChampionList from "./ChampionList";
import ChampionForm from "./ChampionForm";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ChampionMenu = props => {

  const fetchURL = 'http://localhost:8080/api/champions/';


  const [champions, setChampions] = useState([]);
  const [loading, setLoading] = useState(false);

  





  
  useEffect(() => {
    setLoading(true);

    async function fetchData() {
    const request = await axios.get(fetchURL);
    console.log(request);
    setLoading(false);

    setChampions(request.data);
    return request;
} 
fetchData();
}, []);


  

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
          <ChampionList champions={champions} />
          <ChampionForm />
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


export default ChampionMenu;