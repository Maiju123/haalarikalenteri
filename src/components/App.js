import React, { Component } from 'react';
import EventList from './EventList';
import AppBarNav from './AppBarNav';
import EditEventStepper from './EditEventStepper';
import EditEventList from './EditEventList';
import EditEventForm from './EditEventForm';

import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';

const Home = () => (
  <div>
    <EventList />
  </div>
)

const Lisaa = () => (
  <div>
    <h1>Lisää tapahtuma</h1>
  </div>
)

const Muokkaa = () => (
  <div>
    <EditEventList />
    <EditEventStepper />
  </div>
)

const Info = () => (
  <div>
    <h1>Info</h1>
  </div>
)

const Terms = () => (
  <div>
    <h1>Terms and Conditions</h1>
  </div>
)

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <AppBarNav />
        <Route exact path="/" component={Home}/>
        <Route path="/lisaa" component={Lisaa}/>
        <Route path="/muokkaa" component={Muokkaa}/>
        <Route path="/info" component={Info}/>
        <Route path="/terms" component={Terms}/>
        <Route path="/editeventform" component={EditEventForm}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
