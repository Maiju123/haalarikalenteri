import React, { Component } from 'react';
import EventList from './EventList';
import AppBarNav from './AppBarNav';
import EditEventStepper from './EditEventStepper';
import EditEventList from './EditEventList';

import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';

const Home = () => (
  <div>
    <AppBarNav />
    <EventList />
  </div>
)

const Lisaa = () => (
  <div>
    <AppBarNav />
    <h1>Lisää tapahtuma</h1>
  </div>
)

const Muokkaa = () => (
  <div>
    <AppBarNav />
    <EditEventList />
    <EditEventStepper />
  </div>
)

const Info = () => (
  <div>
    <AppBarNav />
    <h1>Info</h1>
  </div>
)

const Terms = () => (
  <div>
    <AppBarNav />
    <h1>Terms and Conditions</h1>
  </div>
)

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <Route exact path="/" component={Home}/>
        <Route path="/lisaa" component={Lisaa}/>
        <Route path="/muokkaa" component={Muokkaa}/>
        <Route path="/info" component={Info}/>
        <Route path="/terms" component={Terms}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
