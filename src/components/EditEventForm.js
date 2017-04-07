import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Axios from 'axios';
import "./event.css";

class EditEventForm extends Component {
	
	fetchEvents(params){
    var self = this;
    Axios.get('/api/event/'+params)
    .then(function (response) {
			console.log(response.data)
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
			console.log(this.props.location.search);
			return (
            <div>
					{this.props.location.search}
				
            </div>
        )
    }
}

export default EditEventForm;