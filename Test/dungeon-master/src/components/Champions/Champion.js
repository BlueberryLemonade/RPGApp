import './Champion.css';
import axios from 'axios';

const Champion = (props) => {


    const deleteHandler = () => {
        axios.delete("http://localhost:8080/api/champions/" + props.id,)
        .catch(error => {
            console.log(error.response)
        })}

    return(
        <div className='champion' onClick={deleteHandler}>
    <p>Champion Name: {props.name}    |    HP: {props.hp}</p>
    
    </div>
    )
};

export default Champion;