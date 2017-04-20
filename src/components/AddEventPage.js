import React from 'react';
import Paper from 'material-ui/Paper';
import AddEventForm from './AddEventForm';
import './form.css';

const style = {
  display: 'inline-block',
    marginTop: '5px',
    marginBottom: '5px',
    position: 'absolute',
};

const AddEventPage = () => (
  <div className="add-event-page">
    <Paper style={style} zDepth={1}>
      <AddEventForm />
    </Paper>
  </div>
);

export default AddEventPage;
