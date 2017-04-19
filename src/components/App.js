import React, { Component } from 'react';
import EventList from './EventList';
import AppBarNav from './AppBarNav';
import EditEventStepper from './EditEventStepper';
import EditEventPage from './EditEventPage';
import EditEventForm from './EditEventForm';
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
        <Route path="/info" component={<h1>Info</h1>}/>
        <Route path="/terms" component={<h1>Terms and Conditions</h1>}/>
        <Route path="/editeventform" component={EditEventForm}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
