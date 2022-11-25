import './ChampionForm.css';
import { useEffect, useState, useRef } from 'react';

const ChampionForm = (props) => {

    const [enteredName, setEnteredName] = useState("");
    const [enteredStrength, setEnteredStrength] = useState("");
    const [nameIsValid, setNameIsValid] = useState(false);
    const [strengthIsValid, setStrengthIsValid] = useState(false);

    const ref = useRef();

    useEffect(() => console.log(enteredName), [enteredName]);


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
            name: enteredName,
            strength: enteredStrength
        };
        setEnteredName("");
        setNameIsValid(false);

        setEnteredStrength("");
        setStrengthIsValid(false);
        props.onChampionAdded(champion);

    };


    return (
        <form onSubmit={verifier}>
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
                    <label className='labelText'>Strength: </label>
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
    )
};

export default ChampionForm;