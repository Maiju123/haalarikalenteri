import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Axios from 'axios';
import "./event.css";

class EditEventForm extends Component {
	
	constructor(props) {
    super(props);
    this.state = {event: {}};
  }

	
	fetchEvents(params){
    var self = this;
    Axios.get('/api/event/'+params)
    .then(function (response) {
    self.setState({event: response.data});
		})
    .catch(function (error) {
      console.log(error);
    });
  }
	
	componentDidMount(){
		var muttuja = this.props.location.search;
		muttuja = muttuja.substring(1);
    console.log(muttuja, "ei stnana"); 
		this.fetchEvents(muttuja);
	}
	
	render(){
		console.log(this.state.event);
			console.log(this.props.location.search);
			return (
            <div>
					<p>Title</p>
					<TextField value={this.state.event.title} />
					    <DatePicker
      			value={this.state.event.date} 
      			firstDayOfWeek={0}

    />
				
            </div>
        )
    }
}

export default EditEventForm;