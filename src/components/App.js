import React, { Component } from 'react';
import EventList from './EventList';
import AppBarNav from './AppBarNav';


class App extends Component {
  render() {
    return (
    <div>
      <AppBarNav />
      <EventList />
    </div>
    );
  }
}

export default App;
