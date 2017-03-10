import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hei from './components/Hei.js';
import AppBarNav from './components/AppBarNav.js'


class App extends Component {
  render() {
    return (
    <div>  
      <AppBarNav />
      <Hei />
    </div>
    );
  }
}

export default App;
