import React, { Component } from 'react';
import EventList from './EventList';
import AppBarNav from './AppBarNav';
import EditEventPage from './EditEventPage';
import AddEventPage from './AddEventPage';
import TermsPage from './TermsPage';

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
          <Route path="/muokkaa" component={EditEventPage}/>
          <Route path="/info" component={null}/>
          <Route path="/terms" component={TermsPage}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
