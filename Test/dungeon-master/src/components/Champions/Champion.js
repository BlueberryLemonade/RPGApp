import './Champion.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Champion = (props) => {


    const deleteHandler = () => {
        axios.delete("http://localhost:8080/api/champions/" + props.id,)
        .catch(error => {
            console.log(error.response)
        })}

    return(
        <div className='champion' >
         <p>Champion Name: {props.name}    |    HP: {props.hp}</p>
          <Link to="/Champions/edit" state={{ id: props.id}}><button>Edit</button></Link>
          <button onClick={deleteHandler}>Delete</button>
    
    </div>
    )
};

export default Champion;