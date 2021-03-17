import './App.css';
import React from 'react';
import { Link, Redirect, Router } from "@reach/router";

import Home from "./Views/Home";
import Number from './Views/Number';
import Color from './Views/Color';

function App() {
  return (
    <div className="App">
      <Router>
        <Home  path="/home"/>
        <Number path="/:id" />
        <Color path="/:word/:color/:bg" />
      </Router>
    </div>
  );
}

export default App;
