/*import logo from './logo.svg';
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
*/
import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import userEvent from '@testing-library/user-event';
import Color from 'color';


function App() {
  const [ctr, setctr] = useState(0);
  const [ctrs, setctrs] = useState(0);
  const [ctr3, setctr3] = useState(0);
  useEffect(() => {
    alert("you clicked");
    console.log("clicxxx");
  }, [ctr]);

  function LikeclickHandler1() {
    var newctr3 = ctr3 + 1;
    setctr3(newctr3);
  }




    return (
      <>
        <h1>Like Counter by React-Hooks</h1>
        <br />
        <button onClick={() => {
          setctr(ctr + 1);
        }}>Like Me!!💕💕{ctr} </button>
        <br />
         <button onClick={LikeclickHandler1} >Like Me!!🌍🌍{ctr3} </button>
         <br />
        <button onClick={() => {
          setctrs(ctrs + 1);
        }}>Like Me!!🎉🎉{ctrs} </button>
        <br />
      </>
    );
  }

  export default App;


