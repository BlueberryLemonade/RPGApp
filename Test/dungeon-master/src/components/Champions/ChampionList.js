import Champion from "./Champion";
import { useState, useEffect } from "react";
import axios from "axios";

const ChampionList = (props) => {

    const fetchURL = 'http://localhost:8080/api/champions/';
    const [champions, setChampions] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        async function fetchData() {
            const request = await axios.get(fetchURL)
                .then(response => {
                    setChampions(response.data);

                }
                ).finally(setLoading(false));

            return request;
        }

        fetchData();
    }, []);



    if (loading) {
        return <p>Loading...</p>
    }

    if (champions.length === 0) {
        return <h2>No Champions in database</h2>
    }

    return (
        <ul>
            {champions.map((champion) => (
                <Champion
                    selected={champion.id === props.selection ? true : false}
                    onClick={props.onSelected}
                    onChange={props.onChange}
                    key={champion.id}
                    id={champion.id}
                    name={champion.name}
                    hp={champion.hp}
                />
            ))}
        </ul>
    );
};

export default ChampionList;