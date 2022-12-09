import './App.css';
import {Route, Routes} from 'react-router-dom';
import Navigator from './components/Navigator/Navigator';





const App = () => {
  


  return (
    <div className="App-header">    
      <h1>Mythweaver</h1>
      <div className='="mid-box'>
      <Routes>
      <Route path="/*" element={<Navigator/>} />
      

      </Routes>
      </div>
    </div>
  );
};

export default App;
