import CampaignCreator from "./CampaignCreator";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

const CampaignMenu = (props) => {

    const fetchURL = "http://localhost:8080/campaigns";

    const [campaigns, setCampaigns] = useState("");
/*
    useEffect(() => {
    
        async function fetchData() {
          const request = await axios.get(fetchURL)
            .then(response => {
              setChampions(response.data);
    
            })
            .then(setUpdated(false))
            .finally(setLoading(false));
    
          return request;
        }
        fetchData();
      }, []);
*/

    const MenuGeneration = () => {
        if (campaigns.length === 0) {

            return (<div>
                
                <p>No Campaigns</p>


            </div>
            )
        }

        return (
            <div>
                
                {campaigns.map((campaign) => (
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