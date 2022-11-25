import Champion from "./Champion";
import { useState, useEffect } from "react";
const ChampionList = (props) => {

    const [champions, setChampions] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch('http://localhost:8080/api/champions')
        .then(response => response.json())
        .then(data=> {
            setChampions(data);
            setLoading(false);
        })
    }, []);

    if(loading){
        return <p>Loading...</p>
    }


    if (champions.length === 0) {
        return <h2>No Champions in database</h2>
    }

    return (
        <ul>
            {champions.map((champion) => (
                <Champion
                    onDeleteClick={props.onDeleteClick}
                    key={champion.name}
                    name={champion.name}
                    strength={champion.hp}
                />
            ))}
        </ul>
    );
};

export default ChampionList;