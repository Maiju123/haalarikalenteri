import React, { Component } from 'react';
import EventList from './EventList';
import AppBarNav from './AppBarNav';
import EditEventStepper from './EditEventStepper';
import EditEventList from './EditEventList';
import { Router, Route, Link, hashHistory} from 'react-router';

const Home = () => <div>
  <AppBarNav />
  <EventList />
  <EditEventList />
  <EditEventStepper />
</div>;

class App extends Component {
  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={Home}></Route>
      </Router>
    );
  }
}

export default App;
