import React, { Component } from 'react';
import Axios from 'axios';
import * as firebase from "firebase";
import FileUploader from 'react-firebase-file-uploader';

/*Import Material-UI*/
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Avatar from 'material-ui/Avatar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import Snackbar from 'material-ui/Snackbar';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAqRaJRN75FbemL1vqG0NpOPc3zSUuf2kg",
  authDomain: "haalarikalenteri-17938.firebaseapp.com",
  databaseURL: "https://haalarikalenteri-17938.firebaseio.com",
  projectId: "haalarikalenteri-17938",
  storageBucket: "haalarikalenteri-17938.appspot.com"
}

firebase.initializeApp(config);

const categories = [
	'jamk',
	'party',
	'sport',
    'jyu',
	'poikkitieteellinen'
    
];

class AddEventForm extends Component {
	
	constructor(props) {
    super(props);
    this.state = {
			event: {},
			title: "",
			description: "",
			date: "",
			time: "",
			categories: [],
			image: '',
      isUploading: false,
      progress: 0,
     autoHideDuration: 4000,
      message: 'Event added to your calendar',
      open: false,
      imageURL: ''
		};
		this.initalize = this.initalize.bind(this);
		this.handleUploadStart = this.handleUploadStart.bind(this);
		this.handleProgress = this.handleProgress.bind(this);
		this.handleUploadSuccess = this.handleUploadSuccess.bind(this);
    this.addEventButton = this.addEventButton.bind(this);

  }

	
  handleUploadStart(){
		this.setState({isUploading: true, progress: 0});
	}
	
  handleProgress(progress){
		this.setState({progress});
	}
	
  handleUploadError = (error) => {
    this.setState({isUploading: false});
    console.error(error);
  }
	
  handleUploadSuccess(filename) {
    this.setState({image: filename, progress: 100, isUploading: false});
    firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({imageURL: url}));
  }


  //NÄMÄ OVAT HARDKOODATTUJA ARVOJA, NÄMÄ PITÄÄ TEHDÄ VIELÄ, ETTÄ HAKEE ARVOT TEKSTIKENTISTÄ! Katso mallia EditEventFormista
	addEventButton(params){
   Axios.post('/api/event', {
			title: this.state.title,
			description: this.state.description,
			date: this.state.date,
			time: this.state.time,
			img: this.state.imageURL,
			categories: this.state.categories,
      key: "sala"
  })
   this.setState({
      open: true,
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
	
	
	/*CHANGE EVENT VALUE-FUNCTIONS*/
	
	changeTitle(event){
		this.setState({title: event.target.value})
	}
	changeDescription(event){
		this.setState({description: event.target.value})
	}
	changeCategories(event, index, values){
		this.setState({categories: event.target.value})
		console.log(values)
	}
    changeCategories(event, index, values){
		this.setState({categories: event.target.value})
		console.log(values)
	}
	
	
	render(){
			return (
        <div>
					<h1>Lisää tapahtumaa</h1>
						<TextField 
							floatingLabelText="Tapahtuman nimi"
							name="title"
							value={this.state.title}
							onChange={this.changeTitle.bind(this)}
						/><br />
						<TextField 
							floatingLabelText="Kuvaus"
							name="description"
							value={this.state.description}
							onChange={this.changeDescription.bind(this)}
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
					
					  <FileUploader
							accept="image/*"
							name="image"
							randomizeFilename
							storageRef={firebase.storage().ref('images')}
							onUploadStart={this.handleUploadStart}
							onUploadError={this.handleUploadError}
							onUploadSuccess={this.handleUploadSuccess}
							onProgress={this.handleProgress}
          	/>
						
						<p>Kuva</p>
						{this.state.isUploading ? <CircularProgress size={60} thickness={7} /> : <Avatar src={this.state.imageURL} size={100} />}
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
						<MenuItem value="jyu" primaryText="JYU" />
						<MenuItem value="poikkitieteellinen" primaryText="Poikkitieteellinen" />
						</SelectField> 
							<br />
						<FlatButton label="Lisää tapahtuma" primary={true} onClick={this.addEventButton}/>
                        <Snackbar
                        open={this.state.open}
                        message='Tapahtumasi on lisätty'
                        action="undo"
                        autoHideDuration={this.state.autoHideDuration}
                        onActionTouchTap={this.handleActionTouchTap}
                        onRequestClose={this.handleRequestClose}
        />
         </div>
        )
    }
}

export default AddEventForm;
                        
                        
                        