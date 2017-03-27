import React, { Component } from 'react';
import EventList from './EventList';
import AppBarNav from './AppBarNav';
import EditEventStepper from './EditEventStepper';
import EditEventList from './EditEventList';


class App extends Component {
  render() {
    return (
    <div>
      <AppBarNav />
      <EventList />
      <EditEventList />
      <EditEventStepper />
    </div>
    );
  }
}

export default App;
