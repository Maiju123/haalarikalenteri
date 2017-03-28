import React, { Component } from 'react';
import EventList from './EventList';
import AppBarNav from './AppBarNav';
import EditEventStepper from './EditEventStepper';
import EditEventList from './EditEventList';
//import { Router, Route, hashHistory} from 'react-router';

import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';

const Home = () => <div>
  <AppBarNav />
  <EventList />
  <EditEventList />
  <EditEventStepper />
</div>;

const Test = () => <div>
  <h1>Testi</h1>
  </div>;

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <Route exact path="/" component={Home}/>
        <Route path="/test" component={Test}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
