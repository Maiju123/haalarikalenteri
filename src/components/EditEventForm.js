import React, { Component } from 'react';
import Axios from 'axios';

/*Import Material-UI*/
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Avatar from 'material-ui/Avatar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';


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
			id: "",
			event: {},
			title: "",
			description: "",
			date: "",
			time: "",
			img: "",
			categories: [],
		};
		this.initalize = this.initalize.bind(this);
		this.editEventButton = this.editEventButton.bind(this);
		this.deleteEventButton = this.deleteEventButton.bind(this);

}
///AXIOKSET EDITBUTTONIIN JA DELETEBUTTONIIN
	
	editEventButton(params){
    var self = this;
   Axios.put('/api/event/'+this.state.id, {
			title: "EVENT",
			description: "No ei oo",
			date: "Häh",
			time: "20:20",
			img: "kuva",
			categories: ["jamk","party"],
      key: "sala"
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
	}
	// DELETEBUTTONILLE TARVITAAN SNACKBAR JA URLIN VAIHTO
		deleteEventButton(){
		    var self = this;
   Axios.delete('/api/event/'+this.state.id, {
  })
  .then(function (response) {
    console.log(response);
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
		this.setState({id: muttuja})
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
<h1>Muokkaa tapahtumaa</h1>
							<TextField 
							floatingLabelText="Tapahtuman otsikko"
							name="title"
							value={this.state.title}
							onChange={this.changeTitle.bind(this)}
							/><br />
							<TextField 
							floatingLabelText="Kuvaus"
							name="description"
							value={this.state.description}
							onChange={this.changeDesc.bind(this)}
							multiLine={true}
      				rows={5}
							/><br />
					
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
						//Kategoriat eivät vielä toimi, funktio vajaa!!!
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
					<FlatButton label="Muokkaa tapahtumaa" primary={true} onClick={this.editEventButton}/>
					<FlatButton label="Poista tapahtumaa" primary={true} onClick={this.deleteEventButton}/>

					
            </div>
        )
    }
}

export default EditEventForm;