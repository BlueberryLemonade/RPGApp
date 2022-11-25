import './Champion.css';

const Champion = (props) => {

   const deleteHandler = () => {
        props.onDeleteClick(props.name);
    };

    return(
        <div className='champion' onClick={deleteHandler}>
    <p>Champion Name: {props.name}    |    Strength: {props.strength}</p>
    
    </div>
    )
};

export default Champion;