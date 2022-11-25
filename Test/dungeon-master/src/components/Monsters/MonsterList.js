import Monster from "./Monster";
const MonsterList = props => {

    if (props.monsters.length === 0) {
        return <h2>No Monsters in database</h2>
    }

    return (
        <ul>
            {props.monsters.map((monster) => (
                <Monster
                    onDeleteClick={props.onDeleteClick}
                    key={monster.name}
                    name={monster.name}
                    strength={monster.strength}
                />
            ))}
        </ul>
    );
};

export default MonsterList;