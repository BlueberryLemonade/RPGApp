import Champion from "./Monster";

const MonsterList = (props) => {







    if (props.monsters.length === 0) {
        return <h2>No Monsters in database</h2>
    }



    return (
        <ul>
            {props.monsters.map((monster) => (
               
                <Champion
                    onChange={props.onChange}
                    key={monster.id}
                    id={monster.id}
                    name={monster.name}
                    hp={monster.hp}
                />
                
            ))}
        </ul>
    );
};

export default MonsterList;