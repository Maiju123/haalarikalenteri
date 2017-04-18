import React, { Component } from 'react';
import EventList from './EventList';
import AppBarNav from './AppBarNav';
import EditEventStepper from './EditEventStepper';
import EditEventPage from './EditEventPage';
import EditEventForm from './EditEventForm';
import AddEventForm from './AddEventForm';
import * as firebase from "firebase";
import {
  HashRouter,
  Route
} from 'react-router-dom';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAqRaJRN75FbemL1vqG0NpOPc3zSUuf2kg",
  authDomain: "haalarikalenteri-17938.firebaseapp.com",
  databaseURL: "https://haalarikalenteri-17938.firebaseio.com",
  projectId: "haalarikalenteri-17938",
  storageBucket: "haalarikalenteri-17938.appspot.com"
}

firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <AppBarNav />
        <Route exact path="/" component={EventList}/>
        <Route path="/lisaa" component={AddEventForm}/>
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
