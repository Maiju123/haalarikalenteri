import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Axios from 'axios';
import EditEventPassword from './EditEventPassword';
import Event from './Event';
import './event.css';
import RaisedButton from 'material-ui/RaisedButton';




class EditEventPage extends Component {

  constructor(props) {
    super(props);
    this.fetchEvents = this.fetchEvents.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.state = {searhTerm: "",
                 events : []
                 }
}
  
  fetchEvents(params){
    var self = this;
    Axios.get('/api/event', {
      params: params
    })
    .then(function (response) {
      self.setState({events: response.data});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleSearchButton() {
  this.fetchEvents({category: "none", text:this.state.searhTerm});  
    
  }
  
  handleSearchTermChange(event) {
  this.setState({searhTerm : event.target.value})
  }
  
  
  render() {
    
    var editEventsArray = this.state.events.map (function(event, index){
      return (
		

          <div>
		
          <Event
          key={index}
          title={event.title}
          desc={event.description}
          categories={event.categories}
          date={event.date}
					img={event.img}
					/>
          <RaisedButton type="submit" label="Muokkaa" primary={true}/>
          </div>
  
      )
    })
    
    return (
    <div>
    <TextField hintText="Search" onChange={this.handleSearchTermChange}/>
    <FlatButton label="Apply" primary={true} onClick={this.handleSearchButton}/>
    <div className="events-list">
      {editEventsArray}
        </div>
      </div>
    );
  }
}

export default EditEventPage;
