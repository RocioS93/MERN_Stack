import React from 'react'
import './App.css';

import UserForm from './components/UserForm.js';

function App() {
  return (
    <div className="App">
      <UserForm firstName="" lastName="" email="" password="" confirmPassword=""/> 
    </div>
  );
}

export default App;
