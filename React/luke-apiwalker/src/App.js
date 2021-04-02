import React from 'react';
import { Router } from '@reach/router';
import './App.css';

import Home from './Views/Home';
import DisplayPeople from './Views/DisplayPeople';
import DisplayPlanets from './Views/DisplayPlanets';

function App() {
  return (
    <div className="container">
      <Router>
        <Home path="/" />
        <DisplayPeople path="/people/:id" />
        <DisplayPlanets path="/planets/:id" />
      </Router>
    </div>
  );
}

export default App;
