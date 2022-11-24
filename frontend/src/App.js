import './App.css';
import {Component} from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import ChampionsList from './components/championList';
import Champion from './components/champion';
class App extends Component  {

render() {
  return (
    <div>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <a href="/" className='navbar-brand'>
          WhatISThis
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/champions"} className="nav-link">
              champions
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
          <Switch>
            <Route path="/" element={<Champion/>} />
            <Route path="/champions" element={<ChampionsList/>} />
          </Switch>
        </div>

    </div>
  )
}
}

export default App;
