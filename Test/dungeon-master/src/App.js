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





const App = () => {
  


  return (
    <div className="App-header">    
      <h1>DungeonMaster-er</h1>
      <Routes>
      <Route path="/" element={<OptionsMenu/>} />
      <Route path="/Monsters" element={<MonsterMenu />} />
      <Route path="/Champions" element={<ChampionMenu />} />
      <Route path="/Dice" element={<DiceMenu />} />
      <Route path="/Arena" element={<ArenaMenu  />} />
      <Route path="/Campaigns/" element={<CampaignMenu  /> } />
      <Route path="/Campaigns/Create" element={<CampaignCreator  />} />

      </Routes>
    </div>
  );
};

export default App;
