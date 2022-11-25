import './OptionsMenu.css';


import { Link } from 'react-router-dom';


const OptionsMenu = () => {

    const options = ["Campaigns", "Monsters", "Champions", "Dice", "Arena"];
    const Options = () => {

   return (
                    <div>
                        {options.map( option => {
                            return(
                                <Link key={option} to={option}><button>{option}</button></Link>
                            )
                        })}
                    </div>
                );
    };


    return (
        <div>
            {Options()}
        </div>
    )
};

export default OptionsMenu;