import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hei from './components/Hei.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Haalarikalenteri</h2>
        </div>
        <p className="App-intro">
          LAITETAAN HAISEMAAN <code>src/App.js</code> and save to reload.
        </p>
		<Hei />
      </div>
    );
  }
}

export default App;
