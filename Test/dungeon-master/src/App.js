import './App.css';
import OptionsMenu from './components/Options/OptionsMenu';
import {Route, Routes} from 'react-router-dom';
import MonsterMenu from './components/Monsters/MonsterMenu';
import CampaignMenu from './components/Campaigns/CampaignMenu';
import ArenaMenu from './components/Arena/ArenaMenu';
import ChampionMenu from './components/Champions/ChampionMenu';
import { useState } from 'react';
import DiceMenu from './components/Dice/DiceMenu';
import CampaignCreator from './components/Campaigns/CampaignCreator';
const DUMMY_MONSTERS = [
  {
    name: "Goblin",
    strength: 2
  },
  {
    name: "Spider",
    strength: 1
  }
];




const App = () => {
  

  const[monsterDatabase, setMonsterDatabase] = useState(DUMMY_MONSTERS);
  const[championDatabase, setChampionDatabase] = useState(DUMMY_CHAMPIONS);
  const[campaigns, setCampaigns]= useState("");

  const saveMosters = (monsterList) => {
    setMonsterDatabase(monsterList);
};

  const saveChampions = (championList) => {
    setChampionDatabase(championList);
  }



 const saveCampaign = (campaign) => {

    setCampaigns((prevCampaigns) => {
      return [campaign, ...prevCampaigns];
    });
  };
  

  return (
    <div className="App-header">    
      <h1>DungeonMaster-er</h1>
      <Routes>
      <Route path="/" element={<OptionsMenu/>} />
      <Route path="/Monsters" element={<MonsterMenu onSave={saveMosters} monsters={monsterDatabase} />} />
      <Route path="/Champions" element={<ChampionMenu onSave={saveChampions} champions={championDatabase} />} />
      <Route path="/Dice" element={<DiceMenu />} />
      <Route path="/Arena" element={<ArenaMenu champions={championDatabase} monsters={monsterDatabase} />} />
      <Route path="/Campaigns/" element={<CampaignMenu campaigns={campaigns} onSave={saveCampaign} /> } />
      <Route path="/Campaigns/Create" element={<CampaignCreator onSave={saveCampaign} />} />

      </Routes>
    </div>
  );
};

export default App;
