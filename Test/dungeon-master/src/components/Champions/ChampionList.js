import Champion from "./Champion";
import { useState, useEffect } from "react";
import axios from 'axios';

const ChampionList = (props) => {







    if (props.champions.length === 0) {
        return <h2>No Champions in database</h2>
    }



    return (
        <ul>
            {props.champions.map((champion) => (
               
                <Champion
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