import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import './event.css';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';


class EditEventPassword extends Component {

render() {
  console.log(this.props.pw)
  console.log(this.props.id)
  return(
  <div>
      <TextField label="Syötä salasana" name="password" type="password" />
      <Link to={{pathname: '/editeventform', search: this.props.id}}><RaisedButton type="submit" label="Muokkaa" primary={true}/></Link>
  </div> 
);
}
}
export default EditEventPassword;
