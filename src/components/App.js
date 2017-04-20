import React, { Component } from 'react';
import EventList from './EventList';
import AppBarNav from './AppBarNav';
import EditEventStepper from './EditEventStepper';
import AddEventPage from './AddEventPage';

import {
  HashRouter,
  Route
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <AppBarNav />
          <Route exact path="/" component={EventList}/>
          <Route path="/lisaa" component={AddEventPage}/>
          <Route path="/muokkaa" component={EditEventStepper}/>
          <Route path="/info" component={null}/>
          <Route path="/terms" component={null}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
