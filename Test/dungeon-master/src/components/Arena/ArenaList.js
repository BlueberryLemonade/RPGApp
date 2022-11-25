const ArenaList = (props) => {

    return(
    <div className={props.className}>
        <h3>{props.className}</h3>
          {props.database.map((data, index) => (
            <p onClick={props.onSelected} key={data.name}>{data.name}</p>
          ))}
        </div>
    );
}; 

export default ArenaList;