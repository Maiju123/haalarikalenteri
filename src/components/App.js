import React, { Component } from 'react';
import EventList from './EventList';
import AppBarNav from './AppBarNav';
import EditEventStepper from './EditEventStepper';


class App extends Component {
  render() {
    return (
    <div>
      <AppBarNav />
      <EventList />
      <EditEventStepper />
    </div>
    );
  }
}

export default App;
