import { useLocation } from "react-router-dom";

const CampaignScreen = (props) => {


    const location = useLocation();

    const { id } = location.state;

    return ( 
        <p>Campaign selected:  {id}</p>
    )
};

export default CampaignScreen;