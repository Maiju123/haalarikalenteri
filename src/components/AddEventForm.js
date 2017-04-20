import React, { Component } from 'react';
import Axios from 'axios';
import * as firebase from "firebase";
import FileUploader from 'react-firebase-file-uploader';
import './form.css';
import { Redirect } from 'react-router'

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
  		date: new Date(),
  		time: "",
      key: "",
  		categories: [],
  		image: '',
      isUploading: false,
      progress: 0,
      autoHideDuration: 4000,
      message: 'Event added to your calendar',
      imageURL: '',
      open: false,
      message: "",
      isDone: false
		};
		this.initalize = this.initalize.bind(this);
		this.handleUploadStart = this.handleUploadStart.bind(this);
		this.handleProgress = this.handleProgress.bind(this);
		this.handleUploadSuccess = this.handleUploadSuccess.bind(this);
    this.addEventButton = this.addEventButton.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.changeTime = this.changeTime.bind(this);
    this.onRequestClose = this.onRequestClose.bind(this);
  }

  componentDidMount() {
    var generator = require('generate-password');
    var password = generator.generate({
      length: 5,
      numbers: true
    });
    this.setState({key: password})
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
    firebase.storage()
      .ref('images')
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({
        imageURL: url,
        progress: 100,
        isUploading: false
    }));
  }

  addEventButton(params){
    var self = this
    Axios.post('/api/event', {
    	title: this.state.title,
    	description: this.state.description,
    	date: this.state.date,
    	time: this.state.time,
    	img: this.state.imageURL,
    	categories: this.state.categories,
      key: this.state.key
    })
    .then(function (response) {
      self.setState({
        open: true
      });
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
		this.setState({categories: values})
	}
  changeDate(event, date){
    this.setState({date: date})
  }
  changeTime(event, time){
    this.setState({time: time})
  }

  onRequestClose(){
    this.setState({
      isDone: true
    });
  }

	render(){

		const categoryList = [
			{title: "jamk", text: "Jamk"},
			{title: "sport", text: "Sport"},
			{title: "party", text: "Party"},
			{title: "jyu", text: "JYU"},
			{title: "poikkitieteellinen", text: "Poikkitieteellinen"}
		]

	const menuItems = (categories) => {
		return categoryList.map((category) => (
      <MenuItem
        key={category.title}
        insetChildren={true}
        checked={categories && categories.includes(category.title)}
        value={category.title}
        primaryText={category.text}
      />
    ));
	}

	return (

    <div className="add-event-form">
      {this.state.isDone ? <Redirect to="/"/> : null }
			<h1>Lisää tapahtuma</h1>
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
					selected={this.state.date}
					DateTimeFormat={global.Intl.DateTimeFormat}
					hintText="Lisää päivämäärä"
					onChange={this.changeDate}
					cancelLabel="Kumoa"
					locale="fi"
				/>

				<p>Aika</p>
				 <TimePicker
          name="timepicker"
					format="24hr"
					hintText="Lisää kellonaika"
          onChange={this.changeTime.bind(this)}
				 /><br />

				<p>Kuva</p>
				{this.state.isUploading ? <CircularProgress size={60} thickness={7} /> : <Avatar src={this.state.imageURL} size={100} />}
        <br />
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
				<p>Kategoriat</p>
				<SelectField
	        multiple={true}
	        hintText="Valitse kategorioita tapahtumallesi"
	        value={this.state.categories}
	        onChange={this.changeCategories.bind(this)}
      	>
	       {menuItems(this.state.categories)}
    		</SelectField>
				<br />
        <div style={{
          "backgroundColor": "#eee",
          "padding": "5px 15px",
          "borderRadius": "5px",
          "margin": "15px 0"
        }}>
          <h3>HUOM!</h3>
          <p>
            Alla olevalla koodilla pääset tarpeen
            tullen muokkaamaan tai poistamaan tapahtuman
            Haalarikalenterista. Kopioi se siis hyvään talteen!
          </p>
          <div >
            <h1 style={{
              "display": "table",
              "backgroundColor": "#FFE4E4",
              "padding": "15px",
              "margin": "15px 0",
              "border": "4px dashed red"
            }}>{this.state.key}</h1>
            </div>
        </div>
				<FlatButton label="Lisää tapahtuma" primary={true} onClick={this.addEventButton}/>
        <Snackbar
          open={this.state.open}
          message='Tapahtumasi on lisätty'
          autoHideDuration={this.state.autoHideDuration}
          onActionTouchTap={this.handleActionTouchTap}
          onRequestClose={this.onRequestClose}
        />
     </div>
    )
  }
}

export default AddEventForm;
