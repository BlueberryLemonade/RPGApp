import MonsterMenu from '../Monsters/MonsterMenu';
import CampaignMenu from '../Campaigns/CampaignMenu';
import ArenaMenu from '../Arena/ArenaMenu';
import ChampionMenu from '../Champions/ChampionMenu';
import DiceMenu from '../Dice/DiceMenu';
import CampaignCreator from '../Campaigns/CampaignCreator';
import {Route, Routes} from 'react-router-dom';
import OptionsMenu from "../Options/OptionsMenu";
import ChampionForm from '../Champions/ChampionForm';

const Navigator = () => {

    return (
        <Routes>
        <Route path="/" element={<OptionsMenu />} />

        <Route path="/Monsters" element={<MonsterMenu />} />
  <Route path="/Champions" element={<ChampionMenu />} />
  <Route path="Champions/add" element={<ChampionForm />} />
  <Route path="/Dice" element={<DiceMenu />} />
  <Route path="/Arena" element={<ArenaMenu  />} />
  <Route path="/Campaigns/" element={<CampaignMenu  /> } />
  <Route path="/Campaigns/Create" element={<CampaignCreator  />} />
  
  </Routes>
    )
};

export default Navigator;