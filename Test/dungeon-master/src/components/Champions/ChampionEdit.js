import './ChampionForm.css';
import {  useState} from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
const ChampionEdit = (props) => {


    const [enteredName, setEnteredName] = useState("");
    const [enteredStrength, setEnteredStrength] = useState("");
    const [nameIsValid, setNameIsValid] = useState(false);
    const [strengthIsValid, setStrengthIsValid] = useState(false);

    const location = useLocation();
    const { id } = location.state;

   
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
    
        async function fetchData() {
        const request = await axios.get('http://localhost:8080/api/champions/' + id);
        console.log(request);
        setLoading(false);
        setEnteredName(request.data.name);
        setEnteredStrength(request.data.hp);
       
        return request;
    } 
    fetchData();
    }, []);
    
    
if(loading){
    return <p>Loading...</p>;
}
   
 
   

    

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


        const updatedChampion = {
            name: enteredName,
            hp: enteredStrength,
           
        };

    

            axios({
                method: 'put',
                          url: 'http://localhost:8080/api/champions/' + id,
                     data: updatedChampion
                       })

        setEnteredName("");
        setNameIsValid(false);

        setEnteredStrength("");
        setStrengthIsValid(false);
        
       
           
                
        
               

    };


    return (
        <div>
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
                    <label className='labelText'>HP: </label>
                    <input
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
                  <Link to="/Champions/"><button>Back</button></Link>
                  </div>

    )
};

export default ChampionEdit;