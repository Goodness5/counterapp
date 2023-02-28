import React from 'react';
// import logo from './logo.svg';
import { useState } from "react";
import './App.css';

const App= () => {
    const [count, setCount]= useState(0);
    const handleIncrement= () =>{
      if (count>=20) {
        alert("stop")
        return;
      }
      setCount(count => count +1)
    }
    return (
      <div className="App">
      
      <div>counter :{count}</div>

      <button onClick={handleIncrement}>Increment</button>
      </div>
    );
  }

export default App;
