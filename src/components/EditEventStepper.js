import React, { Component } from 'react';
import { Step, Stepper, StepLabel, } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import EditEventForm from './EditEventForm';
import Axios from 'axios';
import TextField from 'material-ui/TextField';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';



/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
*/
class HorizontalLinearStepper extends Component {

  constructor(){
    super();
    this.fetchEvents = this.fetchEvents.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
    this.eventSearch = this.eventSearch.bind(this);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.getSelection = this.getSelection.bind(this);
    this.handleKeyChange = this.handleKeyChange.bind(this);

    this.state = {
      finished: false,
      stepIndex: 0,
      searhTerm: "",
      events: [],
      selectedEvent: {},
      progressionDisabled: true,
      key: ""
    }
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
      progressionDisabled: true
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({
        stepIndex: stepIndex - 1,
        progressionDisabled: true
      });
    }
  };

  handleKeyChange(event){
    this.setState({
      key: event.target.value
    })
    if(event.target.value === this.state.selectedEvent.key){
      this.setState({
        progressionDisabled: false
      })
    } else {
      this.setState({
        progressionDisabled: true
      })
    }
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return this.eventSearch()
      case 1:
        return (
          <TextField
            floatingLabelText="Syötä tapahtuman salasana"
            label="Syötä salasana"
            name="password"
            type="password"
            value={this.state.key}
            onChange={this.handleKeyChange}
          />
        )
      case 2:
        return <EditEventForm event={this.state.selectedEvent}/>
      default:
        return this.eventSearch()
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

  handleSearchButton() {
  this.fetchEvents({category: "none", text: this.state.searhTerm});

  }

  handleSearchTermChange(event) {
  this.setState({searhTerm : event.target.value})
  }

  getSelection(selection){
    var selectedIndex = selection[0]
    var selectedEvent = this.state.events[selectedIndex]
    this.setState({
      selectedEvent: selectedEvent,
      progressionDisabled: false
    })
  }

  eventSearch(){
    var displayEventsArray = this.state.events.map (function(event, index){
      return (
        <TableRow key={index}>
          <TableRowColumn key="1">{event.title}</TableRowColumn>
          <TableRowColumn key="2">{event.date}</TableRowColumn>
        </TableRow>
      )
    })

    return (
      <div>
        <TextField hintText="Search" onChange={this.handleSearchTermChange}/>
        <FlatButton label="Apply" primary={true} onClick={this.handleSearchButton}/>
        {this.state.events.length === 0 ? null : (
          <Table onRowSelection={this.getSelection}>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>Tapahtuma</TableHeaderColumn>
                <TableHeaderColumn>Päivämäärä</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {displayEventsArray}
            </TableBody>
          </Table>
        )}
      </div>
    );
  }

  render() {
    const {finished, stepIndex} = this.state;

    const showFinished = (
      <div>
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault();
            this.setState({stepIndex: 0, finished: false});
          }}
        >
          Palaa etusivulle
        </a>
      </div>
    )

    const showOnGoing = (
      <div>
        {this.getStepContent(stepIndex)}
        <div>
          <FlatButton
            label="Palaa"
            disabled={stepIndex === 0}
            onTouchTap={this.handlePrev}
            style={{marginRight: 12}}
          />
          <RaisedButton
            label={stepIndex === 2 ? 'Valmis' : 'Seuraava'}
            primary={true}
            onTouchTap={this.handleNext}
            disabled={this.state.progressionDisabled}
          />
        </div>
      </div>
    )

    return (
      <div>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Hae ja valitse muokattava tapahtuma</StepLabel>
          </Step>
          <Step>
            <StepLabel>Syötä tapahtuman salasana</StepLabel>
          </Step>
          <Step>
            <StepLabel>Muokkaa tapahtuman tietoja</StepLabel>
          </Step>
        </Stepper>
        <div>
          {finished ? showFinished : showOnGoing}
        </div>
      </div>
    );
  }
}

export default HorizontalLinearStepper;
