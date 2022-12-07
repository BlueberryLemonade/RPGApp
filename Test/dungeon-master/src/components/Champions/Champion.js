import './Champion.css';
import axios from 'axios';
//import { Link } from 'react-router-dom';

const Champion = (props) => {


  
    const clickHandler = () => {

        console.log(props.selected)
        props.onClick(props.id);
    }


    const deleteHandler = () => {
        axios.delete("http://localhost:8080/api/champions/" + props.id,)
        .catch(error => {
            console.log(error.response)
        });

        props.onChange();
    
    }
  
 
    if(props.selected){
        return(
            <div className={ "selectedChamp" } onClick={clickHandler}>
         <p className="champData">Champion Name: {props.name}    HP: {props.hp}</p>
         <button className="buttons">Edit</button><button className='buttons' onClick={deleteHandler}>Delete</button>
    </div>
         
 
        )
    }

    if(props.onClick != null){
        return(
            <div className="champion" onClick={clickHandler}>
             <p>Champion Name: {props.name}    |    HP: {props.hp}</p>
        </div>
        )
    }



    return(
        <div className="champion" >
         <p>Champion Name: {props.name}    |    HP: {props.hp}</p>
    </div>
    )
};

export default Champion;