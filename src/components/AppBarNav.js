import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Link
} from 'react-router-dom';

import { AppBar, IconMenu } from 'material-ui';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

export default class AppBarNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <AppBar onTouchTap={this.handleToggle} title="Haalarikalenteri" >
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/" />} primaryText="Etusivu" />
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/Lisaa" />} primaryText="Lisää tapahtuma" />
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/Muokkaa" />} primaryText="Muokkaa tapahtumaa" />
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/info" />} primaryText="Info" />
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/terms" />} primaryText="Terms" />
        </Drawer>
      </AppBar>
    );
  }
}
