import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ActionHome from 'material-ui/svg-icons/action/home';
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle';
import ActionDescription from 'material-ui/svg-icons/action/description';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionCopyright from 'material-ui/svg-icons/action/copyright'
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
      <AppBar title="Haalarikalenteri" onLeftIconButtonTouchTap={this.handleToggle.bind(this)}>
        <Drawer
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <AppBar title="Haalarikalenteri" iconElementLeft={<IconButton><NavigationChevronLeft /></IconButton>} onLeftIconButtonTouchTap={this.handleToggle.bind(this)}>

          </AppBar>

          <MenuItem onTouchTap={this.handleClose.bind(this)} leftIcon={<ActionHome />} containerElement={<Link to="/" />} primaryText="Etusivu" />
          <MenuItem onTouchTap={this.handleClose.bind(this)} leftIcon={<ContentAddCircle />} containerElement={<Link to="/Lisaa" />} primaryText="Lisää tapahtuma" />
          <MenuItem onTouchTap={this.handleClose.bind(this)} leftIcon={<ActionDescription />} containerElement={<Link to="/Muokkaa" />} primaryText="Muokkaa tapahtumaa" />
          <MenuItem onTouchTap={this.handleClose.bind(this)} leftIcon={<ActionInfo />} containerElement={<Link to="/info" />} primaryText="Info" />
          <MenuItem onTouchTap={this.handleClose.bind(this)} leftIcon={<ActionCopyright />} containerElement={<Link to="/terms" />} primaryText="Terms" />
        </Drawer>
      </AppBar>
    );
  }
}
