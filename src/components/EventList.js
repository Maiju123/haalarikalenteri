import React, { Component } from 'react';
import Event from './Event';
import Axios from 'axios'

class EventList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount(){
    var self = this;
    Axios.get('/api/event')
      .then(function (response) {
        self.setState({events: response.data});
      })
      .catch(function (error) {
        console.log(error);
      });
  }



  render() {

    var eventsArray = this.state.events.map(function(event){
      return (
        <Event
          key={event._id}
          title={event.title}
          desc={event.description}
          categories={event.categories}
          date={event.date}
        />
      )
    })

    return (
		<div>
      <h1>EventList</h1>
      {eventsArray}
    </div>
    );
  }
}

export default EventList;
