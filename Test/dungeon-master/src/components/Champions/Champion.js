import './Champion.css';

const Champion = (props) => {

   async deleteHandler = () => {

    const fetchString = 'http://localhost:8080/champions/' + props.key;

    try {
        const response = await fetch(fetchString, {
          method: "delete"
        });
      
        if (!response.ok) {
          const message = 'Error with Status Code: ' + response.status;
          throw new Error(message);
        }
      
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log('Error: ' + err);
      }
      
    };

    return(
        <div className='champion' onClick={deleteHandler}>
    <p>Champion Name: {props.name}    |    Strength: {props.strength}</p>
    
    </div>
    )
};

export default Champion;