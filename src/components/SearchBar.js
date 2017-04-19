import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

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
            style={{width: '100%'}}    
        >
              <MenuItem value="none" primaryText="Ei valittu" />
              <MenuItem value="jamk" primaryText="Jamk" />
              <MenuItem value="party" primaryText="Party" />
              <MenuItem value="sport" primaryText="Sport" />
          </SelectField>
          <TextField hintText="Hakusana" onChange={this.props.handleSearchTermChange}
        style={{width: '100%'}}/>
          <FlatButton label="Hae" primary={true} onClick={this.props.handleApplyFilters}
           />
        </ToolbarGroup>
      </Toolbar>
  

    );
  }
}

export default SearchBar;