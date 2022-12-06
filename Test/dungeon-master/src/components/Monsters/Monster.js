import axios from 'axios';
import { Link } from 'react-router-dom';

const Monster = (props) => {


    const deleteHandler = () => {
        axios.delete("http://localhost:8080/api/monsters/" + props.id,)
        .catch(error => {
            console.log(error.response)
        });

        props.onChange();
    
    }

    return(
        <div className='champion' >
         <p>Monster Name: {props.name}    |    HP: {props.hp}</p>
          <Link to="/Champions/edit" state={{ id: props.id}}><button>Edit</button></Link>
          <button onClick={deleteHandler}>Delete</button>
    
    </div>
    )
};

export default Monster;