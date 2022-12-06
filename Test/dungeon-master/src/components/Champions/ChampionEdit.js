import './ChampionForm.css';
import {  useState} from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
const ChampionEdit = (props) => {


    const [enteredName, setEnteredName] = useState("");
    
    //Currently using let so I can turn the number into a string later for verification purposes, 
    //need to find a more elegant solution
    let [enteredHP, setEnteredHP] = useState("");

    const [nameIsValid, setNameIsValid] = useState(true);
    const [strengthIsValid, setStrengthIsValid] = useState(true);

    const location = useLocation();
    const { id } = location.state;

   
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
    
        async function fetchData() {
        const request = await axios.get('http://localhost:8080/api/champions/' + id);
        setLoading(false);
        setEnteredName(request.data.name);
        setEnteredHP(request.data.hp);
       
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

    const HPChangeHandler = (event) => {
        const holder = event.target.value;
        if (holder.trim().length > 0 && holder <= 9999) {
            setStrengthIsValid(true);
        } else {
            setStrengthIsValid(false);
        }
        setEnteredHP(holder);
        return;
    };

    const verifier = (event) => {
        event.preventDefault();
        if (enteredName.trim().length > 0) {
            setNameIsValid(true);
        }

        enteredHP = enteredHP.toString();

        if (enteredHP.trim().length > 0) {
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
            hp: enteredHP,
           
        };

        

            axios({
                method: 'put',
                          url: 'http://localhost:8080/api/champions/' + id,
                     data: updatedChampion
                       })

        setEnteredName("");
        setNameIsValid(false);

        setEnteredHP("");
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
                        value={enteredHP}
                        onChange={HPChangeHandler}></input>
                </div>
            </div>
            <button type='submit' >Confirm</button>
        </form>
                  <Link to="/Champions/"><button>Back</button></Link>
                  </div>

    )
};

export default ChampionEdit;