import { useState } from "react";
import { Link } from "react-router-dom";

const CampaignCreator = (props) => {


    const[enteredName, setEnteredName] = useState("");
    const[enteredDesc, setEnteredDesc] = useState("");

    const descChangeHandler = (event) => {
        setEnteredDesc(event.target.value);
    };

    const nameChangeHander = (event) => {
        setEnteredName(event.target.value);
    }

    const saveCampaign = () => {
        const createdCampaign = {
            name: enteredName,
            description: enteredDesc
        };

        props.onSave(createdCampaign);
    }
    return (
        <div>
            <label>Name:</label>
        <input type="text" onChange={nameChangeHander}></input>
        <label>Description: </label>
        <textarea id="story" name="story"  rows="2" cols="30" onChange={descChangeHandler}/>        
        <Link to="/Campaigns/"><button type="submit" onClick={saveCampaign} onSave={saveCampaign}>Create</button></Link>
        
        </div>
    )
};

export default CampaignCreator;