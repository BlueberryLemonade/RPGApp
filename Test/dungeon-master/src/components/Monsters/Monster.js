import './Monster.css';

const Monster = (props) => {

   const deleteHandler = () => {
        props.onDeleteClick(props.name);
    };

    return(
        <div className='monster' onClick={deleteHandler}>
    <p>Name: {props.name}    |    Strength: {props.strength}</p>
    
    </div>
    )
};

export default Monster;