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
      searchTerm: ''
    }
  }


  render() {
    return (
      <Toolbar>
        <ToolbarGroup>
          <SelectField
              floatingLabelText="Category"
              value={this.props.currentCategory}
              onChange={this.props.handleCategoryChange}
            >
              <MenuItem value="none" primaryText="None" />
              <MenuItem value="jamk" primaryText="Jamk" />
              <MenuItem value="party" primaryText="Party" />
              <MenuItem value="sport" primaryText="Sport" />
          </SelectField>
          <TextField hintText="Search" onChange={this.props.handleSearchTermChange}/>
          <FlatButton label="Apply" primary={true} onClick={this.props.handleApplyFilters}/>
        </ToolbarGroup>
      </Toolbar>
  

    );
  }
}

export default Event;
