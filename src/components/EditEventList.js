import React, { Component } from 'react';
import Event from './Event';
import Axios from 'axios';
import SearchBar from './SearchBar';
import EditEventPassword from './EditEventPassword';
import EditEventDatePicker from './EditEventDatePicker';
import './event.css';

class EditEventList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: [],
      category: "none",
      searchTerm: ""
    };
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.handleApplyFilters = this.handleApplyFilters.bind(this);
  }

  componentDidMount(){
    this.fetchEvents();
  }

  handleSearchTermChange(term){
    this.setState({searchTerm: term});
  }

  handleCategoryChange(event, index, value){
    this.setState({category: value});
  }

  handleApplyFilters(){
    if(this.state.category !== "none"){
      this.fetchEvents({categories: this.state.category});
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

  render() {


    var editEventsArray = this.state.events.map (function(event){
			console.log("titles are", event.title);
      return (
				<Event
          key={event._id}
          title={event.title}
          desc={event.description}
          categories={event.categories}
          date={event.date}
					img={event.img}
					pw={event.pw}
					/>	
      )
    })

    return (
					<div>
			<SearchBar
        handleCategoryChange={this.handleCategoryChange}
        handleSearchTermChange={this.handleSearchTermChange}
        currentCategory={this.state.category}
        handleApplyFilters={this.handleApplyFilters}
      />
        <div className="events-list">
      <h1>Edit Event</h1>
    	<EditEventDatePicker />
					{editEventsArray}
			<EditEventPassword />
        </div>
    </div>
    );
  }
}

export default EditEventList;
