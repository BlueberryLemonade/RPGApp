import Die from "./Die";
import { useState } from "react";

const basicDiceSet = [6, 8, 10,20,100];

const Dicebag = (props) => {

    const[dice, setDice] = useState(basicDiceSet);
    const[enteredX, setEnteredX] = useState("");

    const changeHandler = (event) =>{
        setEnteredX(event.target.value);
    }
    const addDie = () =>{
        
        setDice(prevDice => {
            const updatedDice = [enteredX, ...prevDice];
            return updatedDice;
        });
    };

    return(
        <div>
            {dice.map(die => (
                <Die key={die} sides={die} roll={props.onRoll}/>
            ))}
            <button onClick={addDie}>Add X Die</button>
            <input
                        type='number'
                        min="0"
                        max="9999"
                        value={enteredX}
                        onChange={changeHandler}
                        ></input>
        </div>
    );
        
    
};

export default Dicebag;