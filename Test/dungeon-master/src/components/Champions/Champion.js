import './Champion.css';
//import axios from 'axios';
//import { Link } from 'react-router-dom';

const Champion = (props) => {


  
    const clickHandler = () => {

        console.log(props.selected)
        props.onClick(props.id);
    }

/*
    const deleteHandler = () => {
        axios.delete("http://localhost:8080/api/champions/" + props.id,)
        .catch(error => {
            console.log(error.response)
        });

        props.onChange();
    
    }
  */  

    return(
        <div className={props.selected ? "selectedChamp" : "champion"} onClick={clickHandler}>
         <p>Champion Name: {props.name}    |    HP: {props.hp}</p>
    </div>
    )
};

export default Champion;