import React, { Component } from 'react';
import Event from './Event';
import Axios from 'axios';
import SearchBar from './SearchBar';
import './event.css';

class EventList extends Component {

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

  handleSearchTermChange(event){
    this.setState({searchTerm: event.target.value});
  }

  handleCategoryChange(event, index, value){
    this.setState({category: value});
  }

	// Execute search when filters are applied
  handleApplyFilters(){
		if (this.state.category !== "none" && this.state.searchTerm !== ""){
			this.fetchEvents({
				q: {
					title: this.state.searchTerm,
					categories: this.state.category
				}
			})
		} else {
			this.fetchEvents()
		}			
	}
	
  fetchEvents(params){
    var self = this;
    Axios.get('https://api.mlab.com/api/1/databases/data/collections/events?apiKey=rg3yJB1irPLp408QOMV8VjHvTJIDDojS', {
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


    var eventsArray = this.state.events.map(function(event, index){
      return (
        <Event
          key={index}
          title={event.title}
          desc={event.description}
          categories={event.categories}
          date={event.date}
					img={event.img}
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
      	<h1>EventList</h1>
      	{eventsArray}
       </div>
    </div>
    );
  }
}

export default EventList;
