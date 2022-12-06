import Monster from "./Monster";
import { useState, useEffect} from "react";
import axios from "axios";

const MonsterList = (props) => {

    const[monsters, setMonsters] = useState([]);
    const[loading, setLoading] = useState(false);

    
    const fetchURL = 'http://localhost:8080/api/monsters/';

  
  
    useEffect(() => {
        setLoading(true);
    
        async function fetchData() {
        const request = await axios.get(fetchURL)
        .then(response => {
          setMonsters(response.data);
        
        }
        );
    
        setLoading(false);
        return request;
    } 
    fetchData();
    }, []);


    if(loading){
        return <p>Loading...</p>
    }
    if (monsters.length === 0) {
        return <h2>No Monsters in database</h2>
    }



    return (
        <ul>
            {monsters.map((monster) => (
               
                <Monster
                    onChange={props.onChange}
                    key={monster.id}
                    id={monster.id}
                    name={monster.name}
                    hp={monster.hp}
                />
                
            ))}
        </ul>
    );
};

export default MonsterList;