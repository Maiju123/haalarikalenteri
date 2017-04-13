import React from 'react';
import { AppBar, IconMenu, IconButton, MenuItem, } from 'material-ui';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import {
  Link
} from 'react-router-dom';

const AppBarNav = () => (
  <AppBar
    title="Haalarikalenteri"
    iconElementLeft={
      <IconMenu iconButtonElement={
        <IconButton>
          <NavigationMenu />
        </IconButton>
      }>
        <MenuItem containerElement={<Link to="/" />} primaryText="Etusivu" />
        <MenuItem containerElement={<Link to="/Lisaa" />} primaryText="Lisää tapahtuma" />
        <MenuItem containerElement={<Link to="/Muokkaa" />} primaryText="Muokkaa tapahtumaa" />
        <MenuItem containerElement={<Link to="/Info" />} primaryText="Info" />
        <MenuItem containerElement={<Link to="/Terms" />}primaryText="Terms" />
      </IconMenu>
    }
  />
);

export default AppBarNav;
