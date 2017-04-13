import React, { Component } from 'react';
import Axios from 'axios';

/*Import Material-UI*/
import eventNameAndDesc from './eventNameAndDesc';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Avatar from 'material-ui/Avatar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

/*Tää ei toimi, kato vielä = https://www.npmjs.com/package/react-images-uploader, ei jostain syystä suostu asentaa npm pakettia?
import imagesUploader from './imageUploader';*/


const categories = [
	'jamk',
	'party',
	'sport',
];

class EditEventForm extends Component {
	
	constructor(props) {
    super(props);
    this.state = {
			event: {},
			title: "",
			description: "",
			date: "",
			time: "",
			img: "",
			categories: [],
		};
		this.initalize = this.initalize.bind(this);
  }

	
	fetchEvents(params){
    var self = this;
    Axios.get('/api/event/'+params)
    .then(function (response) {
    self.setState({event: response.data});
		self.initalize()
		})
    .catch(function (error) {
      console.log(error);
    });
  }
	
	initalize(){
		this.setState({
			title: this.state.event.title,
			description: this.state.event.description,
			date: this.state.event.date,
			time: this.state.event.time,
			img: this.state.event.img,
			categories: this.state.event.categories,
		})
	}
	
	componentDidMount(){
		var muttuja = this.props.location.search;
		muttuja = muttuja.substring(1);
		console.log(muttuja)
		this.fetchEvents(muttuja);
	}
	
	/*CHANGE EVENT VALUE-FUNCTIONS*/
	
	changeTitle(event){
		this.setState({title: event.target.value})
	}
	changeDesc(event){
		this.setState({description: event.target.value})
	}
	changeCategories(event, index, values){
		this.setState({categories: event.target.value})
		console.log(values)
	}
	
	
	render(){
			return (
            <div>
	<eventNameAndDesc />
					
					<p>Päivämäärä</p>
					    <DatePicker
								selected={this.state.event.date}
								hintText={this.state.event.date}
								defaultValue={this.state.event.date}
    					/>
					<p>Aika</p>
					 <TimePicker 
          format="24hr"
          hintText={this.state.event.time}
          defaultValue={this.state.event.time}
        /><br />
					<p>Kuva</p>
					<Avatar
          src={this.state.event.img}
          size={100}
        />
					{
						// Images Uploader, katso imagesUploader.js tiedosto <imagesUploader /> 
					}
				<p>Kategoriat</p>
				<SelectField
        multiple={true}
        hintText="Valitse kategorioita tapahtumallesi"
				checked={this.state.categories && this.state.categories.includes(categories)}
        value={this.state.categories}
        onChange={this.changeCategories.bind(this)}
      	>
        <MenuItem value="jamk" primaryText="Jamk" />
        <MenuItem value="party" primaryText="Party" />
        <MenuItem value="sport" primaryText="Sport" />
      	</SelectField> 
					<br />
					
            </div>
        )
    }
}

export default EditEventForm;