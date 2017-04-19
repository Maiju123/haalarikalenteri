import React from 'react';
import Paper from 'material-ui/Paper';
import AddEventForm from './AddEventForm';

const style = {
  display: 'inline-block',
    marginTop: '5',
    marginBottom: '5',
    position: 'absolute',
};

const AddEventPage = () => (
  <div>
    <Paper style={style} zDepth={1}> 
    <AddEventForm />
    </Paper>
  </div>
);

export default AddEventPage;