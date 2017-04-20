import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import DatePicker from 'material-ui/DatePicker';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }


  render() {
    return (
      <Toolbar >
        <ToolbarGroup>
          <SelectField
            floatingLabelText="Kategoria"
            value={this.props.currentCategory}
            onChange={this.props.handleCategoryChange}
          >
            <MenuItem value="none" primaryText="Kaikki" />
            <MenuItem value="jamk" primaryText="Jamk" />
            <MenuItem value="party" primaryText="Party" />
            <MenuItem value="sport" primaryText="Sport" />
          </SelectField>
          <TextField
            hintText="Hakusana"
            onChange={this.props.handleSearchTermChange}
            value={this.props.searchTerm}
          />
   		    <DatePicker
   					DateTimeFormat={global.Intl.DateTimeFormat}
   					hintText="Päivämäärä"
   					onChange={this.props.handleDateChange}
   					cancelLabel="Kumoa"
   					locale="fi"
   				/>
          <FlatButton label="Hae" primary={true} onClick={this.props.handleApplyFilters}
           />
        </ToolbarGroup>
      </Toolbar>


    );
  }
}

export default SearchBar;
