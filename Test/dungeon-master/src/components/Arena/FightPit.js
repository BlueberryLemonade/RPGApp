const FightPit  = (props) => {

    return (
        <div>
            <h1>--------Arena---------</h1>
            <h2>========================</h2>
            <p>Champion: {props.selectedChampion}</p>
            <p>Monster: {props.selectedMonster}</p>
        </div>
    );
};

export default FightPit;