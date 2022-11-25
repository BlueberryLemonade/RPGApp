import { useState } from "react";
import Dicebag from "./Dicebag";
import { Link } from "react-router-dom";
const DiceMenu = (props) => {

  const [roll, setRoll] = useState("0");

  const rollHandler = (rolledNumber) => {
    setRoll(rolledNumber);
  }

    const diceOptions = () => {
   
          return (
            <div>
              <p>{roll}</p>
              <Dicebag onRoll={rollHandler}/>
              <Link to="/"><button>Close Dice</button></Link>
            </div>
          );
      };

    return(
        <div>
        {diceOptions()}
        </div>
    )
};

export default DiceMenu;