import './Champion.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Champion = (props) => {

    const clickHandler = () => {
        props.onClick(props.id);
    };

    if (props.selected) {
        const deleteHandler = () => {
            axios.delete("http://localhost:8080/api/champions/" + props.id,)
                .catch(error => {
                    console.log(error.response)
                });
            props.onChange();
        };

        return (
            <div className={"selectedChamp"} onClick={clickHandler}>
                <p className="champData">Champion Name: {props.name}    HP: {props.hp}</p>
                <Link to="edit" state={{ id: props.id }}><button className="buttons">Edit</button></Link>
                <button className='buttons' onClick={deleteHandler}>Delete</button>
            </div>
        )
    };

    if (props.onClick != null) {
        return (
            <div className="champion" onClick={clickHandler}>
                <p>Champion Name: {props.name}    |    HP: {props.hp}</p>
            </div>
        )
    };

    return (
        <div className="champion" >
            <p>Champion Name: {props.name}    |    HP: {props.hp}</p>
        </div>
    )
};

export default Champion;