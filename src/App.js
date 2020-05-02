import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Containers/Home';
import { Switch, Route } from 'react-router-dom';
import { MatchDetails } from './Containers/MatchDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/match-details">
          <MatchDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
