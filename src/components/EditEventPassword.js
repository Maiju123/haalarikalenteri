import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import './event.css';
import RaisedButton from 'material-ui/RaisedButton';

class EditEventPassword extends Component {

  constructor(props) {
    super(props);
  }
render() {
  return(
  <div>
      <form>
      <TextField label="Syötä salasana" name="password" type="password" />
      <RaisedButton type="submit" label="Muokkaa" primary={true}  />
        </form>
  </div> 
);
}
}
export default EditEventPassword;
