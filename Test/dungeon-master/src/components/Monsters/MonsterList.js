import Champion from "./Monster";

const MonsterList = (props) => {







    if (props.champions.length === 0) {
        return <h2>No Champions in database</h2>
    }



    return (
        <ul>
            {props.champions.map((champion) => (
               
                <Champion
                    onChange={props.onChange}
                    key={champion.id}
                    id={champion.id}
                    name={champion.name}
                    hp={champion.hp}
                />
                
            ))}
        </ul>
    );
};

export default MonsterList;