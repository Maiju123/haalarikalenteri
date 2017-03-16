import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

class Event extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Toolbar>
        <ToolbarGroup>
          <SelectField
              floatingLabelText="Category"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <MenuItem value={1} primaryText="None" />
              <MenuItem value={2} primaryText="Jamk" />
              <MenuItem value={3} primaryText="Party" />
              <MenuItem value={4} primaryText="Sports" />
          </SelectField>
          <TextField hintText="Search"/>
          <FlatButton label="Apply" primary={true} />
        </ToolbarGroup>
      </Toolbar>

    );
  }
}

export default Event;
