import React, { useState } from 'react';
import Input from './Components/Input';
import Task from './Components/Task';
import './App.css';

function App() {
  const[list, setList] = useState([]);
  
  return (
    <div className="App container" style={{width:"800px"}}>
      <Input list={list} setList={setList} />
      {list.map((task, i) => (
        <Task task={task} setList={setList} index={i} list={list} />
      ))}
    </div>
  );
}

export default App;
