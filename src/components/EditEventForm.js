import React, { Component } from 'react';
import Axios from 'axios';
import * as firebase from "firebase";
import FileUploader from 'react-firebase-file-uploader';
import moment from 'moment'

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

const categories = [
	'jamk',
	'party',
	'sport',
	'jyu',
	'poikkitieteellinen'
];

class EditEventForm extends Component {

	constructor(props) {
    super(props);
    this.state = {
			id: this.props.event._id,
			title: this.props.event.title,
			description: this.props.event.description,
			categories: this.props.event.categories,
			date: this.props.event.date,
			time: this.props.event.time,
			key: this.props.event.key,
      isUploading: false,
      autoHideDuration: 4000,
      progress: 0,
      imageURL: this.props.event.img,
			message: "",
			open: false
		};

    this.handleUploadStart = this.handleUploadStart.bind(this);
		this.handleProgress = this.handleProgress.bind(this);
		this.handleUploadSuccess = this.handleUploadSuccess.bind(this);
		this.editEventButton = this.editEventButton.bind(this);
		this.deleteEventButton = this.deleteEventButton.bind(this);
		this.handleTimeChange = this.handleTimeChange.bind(this);
		this.changeDate = this.changeDate.bind(this);

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

	editEventButton(params){
	  var self = this;
	  Axios.put('/api/event/'+this.state.id, {
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
	      open: true,
	      message: 'Tapahtumaasi on muokattu',
		  });
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
	}

	deleteEventButton(){
		var self = this;
	  Axios.delete('/api/event/'+this.state.id, {
	  })
	  .then(function (response) {
  	  self.setState({
		    open: true,
		    message: 'Tapahtumasi on poistettu',
		  });
	  })
	  .catch(function (error) {
	    console.log(error);
	  });

	}

	/*CHANGE EVENT VALUE-FUNCTIONS*/

	changeTitle(event){
		this.setState({title: event.target.value})
	}
	changeDesc(event){
		this.setState({description: event.target.value})
	}
	changeDate(event, date){
		this.setState({date: date})
		var parsedDate = moment(date).format("DD,MM,YYYY")
		console.log(parsedDate)
	}
	changeCategories(event, index, values){
		this.setState({categories: values})
		console.log(values)
	}

	handleTimeChange(event, time){
		this.setState({time: time})
		var parsedTime = moment(time).format("h:mm")
		console.log(parsedTime)
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
      <div>
        <h1>Muokkaa tapahtumaa</h1>
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
					onChange={this.changeDesc.bind(this)}
					multiLine={true}
  				rows={5}
				/><br />

				<p>Päivämäärä</p>
		    <DatePicker
					selected={this.state.date}
					DateTimeFormat={global.Intl.DateTimeFormat}
					hintText="Lisää päivämäärä"
					defaultDate={moment(this.state.date).toDate()}
					onChange={this.changeDate}
					cancelLabel="Kumoa"
					locale="fi"
				/>

				<p>Aika</p>
				<TimePicker
          format="24hr"
					cancelLabel="Kumoa"
          hintText="Lisää ajankohta"
          defaultTime={moment(this.state.time).toDate()}
					onChange={this.handleTimeChange}
					locale="fi"
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
				<FlatButton label="Muokkaa tapahtumaa" primary={true} onClick={this.editEventButton}/>
				<FlatButton label="Poista tapahtuma" primary={true} onClick={this.deleteEventButton}/>
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          autoHideDuration={this.state.autoHideDuration}
          onActionTouchTap={this.handleActionTouchTap}
          onRequestClose={this.handleRequestClose}
      	/>
      </div>
    )
  }
}

export default EditEventForm;
