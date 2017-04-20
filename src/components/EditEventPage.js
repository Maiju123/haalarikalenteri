import React from 'react';
import Paper from 'material-ui/Paper';
import EditEventStepper from './EditEventStepper';
import './form.css';

const style = {
  display: 'inline-block',
    marginTop: '5px',
    marginBottom: '5px',
    position: 'absolute',
};

const AddEventPage = () => (
  <div className="edit-event-page">
    <Paper style={style} zDepth={1}>
      <EditEventStepper />
    </Paper>
  </div>
);

export default AddEventPage;
