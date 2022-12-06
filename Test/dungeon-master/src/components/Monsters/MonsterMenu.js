import MonsterForm from "./MonsterForm";
import MonsterList from "./MonsterList";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const MonsterMenu = props => {

  const fetchURL = 'http://localhost:8080/api/monsters/';


  const [monsters, setMonsters] = useState([]);
  const [loading, setLoading] = useState(false);

  const [updated, setUpdated] = useState(false);
  


  
  useEffect(() => {
    setLoading(true);

    async function fetchData() {
    const request = await axios.get(fetchURL)
    .then(response => {
      setMonsters(response.data);
    
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
          <MonsterList monsters={monsters} onChange={changeHandler}/>
          <MonsterForm onChange={changeHandler} />
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