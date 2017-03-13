import React, { Component } from 'react';
import Hei from './Hei.js';
import AppBarNav from './AppBarNav.js'


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
