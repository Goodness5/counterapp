<<<<<<< HEAD
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
=======
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
>>>>>>> f5db3c0be289df28d1c78d85311e56c1c31dac69

export default App;
