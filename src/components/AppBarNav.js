import React, { Component } from 'react';
import { AppBar, iconElementLeft, IconMenu, IconButton, MenuItem, } from 'material-ui';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
const AppBarNav = () => (
  <AppBar
    title="Haalarikalenteri"
    iconElementLeft = {
      <IconMenu iconButtonElement = {
        <IconButton>
          <NavigationMenu />
        </IconButton>
      }>
        <MenuItem primaryText="Lisää tapahtuma" />
        <MenuItem primaryText="Muokkaa tapahtumaa" />
        <MenuItem primaryText="Info" />
        <MenuItem primaryText="Käyttöehdot" />
      </IconMenu>
    }
  />
);

export default AppBarNav;
