import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import './event.css';


class EditEventPassword extends Component {
  render() {
    console.log(this.props.event)
    return (
      <div>
        <TextField floatingLabelText="Syötä tapahtuman salasana" label="Syötä salasana" name="password" type="password" />
      </div>
    )
  }
}
export default EditEventPassword;
