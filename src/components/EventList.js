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

    componentDidMount() {
        this.fetchEvents({category: "none", text: ""});
    }

    handleSearchTermChange(event) {
        this.setState({searchTerm: event.target.value})
    }

    handleCategoryChange(event, index, value) {
        this.setState({category: value})
    }

    handleApplyFilters() {
        this.fetchEvents({category: this.state.category, text: this.state.searchTerm})
        this.setState({searchTerm: ""});
    }

    // Fetchevents takes one parameter. A params object
    // that includes category: "string" and text: "string"
    fetchEvents(params) {
        var self = this;
        Axios.get('/api/event', {
            params: params
        }).then(function (response) {
            self.setState({events: response.data});
        }).catch(function (error) {
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
                    time={event.time}
                    img={event.img}
                />
            );
        });

        return (
            <div>
                <SearchBar
                    handleCategoryChange={this.handleCategoryChange}
                    handleSearchTermChange={this.handleSearchTermChange}
                    currentCategory={this.state.category}
                    handleApplyFilters={this.handleApplyFilters}
                    searchTerm={this.state.searchTerm}
                />
                <div className="events-list">
                    {eventsArray}
                </div>
            </div>
        );
    }

}

export default EventList;
