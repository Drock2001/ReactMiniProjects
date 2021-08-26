import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import userEvent from '@testing-library/user-event';
import Color from 'color';



function App() {
  const [ctr, setctr] = useState(0);
  function LikeclickHandler() {
    var newctr=ctr+1;
    setctr(newctr);
    
  }
  return (
    <div className="App">
      <h1>Like Counter by React-Hooks</h1>
      <button id onClick={LikeclickHandler} >Like Me!!💕 </button>{ctr}
    </div>
  );
}

export default App;
