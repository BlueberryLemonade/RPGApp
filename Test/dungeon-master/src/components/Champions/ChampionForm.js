import './ChampionForm.css';
import {  useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ChampionForm = (props) => {

    const [enteredName, setEnteredName] = useState("");
    const [enteredStrength, setEnteredStrength] = useState("");
    const [nameIsValid, setNameIsValid] = useState(false);
    const [strengthIsValid, setStrengthIsValid] = useState(false);

    const ref = useRef();



    const nameChangeHandler = (event) => {
        const holder = event.target.value;
        if (holder.trim().length > 0) {
            setNameIsValid(true);
        } else {
            setNameIsValid(false);
        }
        setEnteredName(holder);
        return;
    };

    const strengthChangeHandler = (event) => {
        const holder = event.target.value;
        if (holder.trim().length > 0 && holder <= 9999) {
            setStrengthIsValid(true);
        } else {
            setStrengthIsValid(false);
        }
        setEnteredStrength(holder);
        return;
    };

    const verifier = (event) => {
        event.preventDefault();
        if (enteredName.trim().length > 0) {
            setNameIsValid(true);
        }

        if (enteredStrength.trim().length > 0) {
            setStrengthIsValid(true);
        }

        if (nameIsValid && strengthIsValid) {
            submitHandler(event);
        }
    };


    const submitHandler = (event) => {
        event.preventDefault();
        //Checks to see if the entered strength and name are empty, if so, it sets them to invalid


        const champion = {
            hp: enteredStrength,
            name: enteredName,
        };
        setEnteredName("");
        setNameIsValid(false);

        setEnteredStrength("");
        setStrengthIsValid(false);
        
       
                
          axios({
         method: 'post',
                   url: 'http://localhost:8080/api/champions',
              data: champion
                });

        props.onChange();
               

    };


    return (
        <div>
        <form className="champForm" onSubmit={verifier}>
            <div>
                <h2>Champion Creation</h2>
                <div >
                    <label className='labelText'>Champion Name: </label>
                    <input
                        className={`nameField ${!nameIsValid ? 'invalid' : ''}`}
                        type='text'
                        value={enteredName}
                        onChange={nameChangeHandler}
                    ></input>
                </div>
                <div>
                    <label className='labelText'>HP: </label>
                    <input
                        ref={ref}
                        type='number'
                        className={`strengthField ${!strengthIsValid ? 'invalid' : ''}`}
                        min="0"
                        max="9999"
                        value={enteredStrength}
                        onChange={strengthChangeHandler}></input>
                </div>
            </div>
            <button type='submit' >Confirm</button>
        </form>
                  </div>

    )
};

export default ChampionForm;