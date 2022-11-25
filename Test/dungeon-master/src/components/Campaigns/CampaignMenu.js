import CampaignCreator from "./CampaignCreator";
import { Routes, Route, Link } from "react-router-dom";

const CampaignMenu = (props) => {



    const MenuGeneration = () => {
        if (props.campaigns.length === 0) {

            return (<div>
                
                <p>No Campaigns</p>


            </div>
            )
        }

        return (
            <div>
                
                {props.campaigns.map((campaign) => (
                    <Link to="/"><div>
                        <p>Name: {campaign.name}</p>
                        <p>Description: {campaign.description}</p>
                    </div>
                    </Link>

                ))}


            </div>
        );
    };

    return (
        <div>
            <Routes>
            <Route path="Create" element={<CampaignCreator onSave={props.onSave} /> } />
            </Routes>
            
            {MenuGeneration()}
            <Link to="/Campaigns/Create"><button>Create a Campaign</button></Link>

            <Link to="/"><button>Close Menu</button></Link>
        </div>
    );

};

export default CampaignMenu;