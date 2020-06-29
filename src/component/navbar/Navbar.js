import React, {useState} from "react";
import propTypes from "prop-types";
import {PR} from "../../logic/Helper";
import {Link} from "react-router-dom";
import {strings} from "../../config/constant/string-constants";
import clsx from "clsx";
import {
  PATH_ACCOUNT,
  PATH_FUTURE_EVENTS,
  PATH_HOME,
  PATH_LOGIN,
  PATH_MEMBERS,
  PATH_PAST_EVENTS,
  PATH_RACETRACKS
} from "../../config/constant/path-constants";
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PeopleIcon from "@material-ui/icons/People";
import EventIcon from "@material-ui/icons/Event";
import HistoryIcon from "@material-ui/icons/History";
import FlagIcon from "@material-ui/icons/Flag";

import NavbarStyles from "./NavbarStyles";
import "../../index.css";

export const Navbar = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const [isOpen, setIsOpen] = useState(false);
  const navbarStyles = NavbarStyles();

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  /*----------------------------------------------------------------------------------------------*/
  const renderTopBar = () => {

    const renderSlider = () => {
      return (
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleDrawerOpen}
          className={isOpen ?
            navbarStyles.menuButton && navbarStyles.menuButtonHidden
            : navbarStyles.menuButton}
        >
          <MenuIcon/>
        </IconButton>
      );
    };

    const renderTitle = () => {
      return (
        <Typography component="h1" variant="h6" color="inherit" noWrap
                    className={navbarStyles.title}>
          <Link to={PATH_HOME} className="custom-color-inherit">
            {strings.app.title}
          </Link>
        </Typography>
      );
    };

    const renderThemeToggler = () => {
      return (
        <IconButton color="inherit" onClick={props.handleDarkMode}>
          {props.isDarkMode ? <WbSunnyIcon/> : <NightsStayIcon/>}
        </IconButton>
      );
    };

    const renderAccountButton = () => {
      return (
        <>
          <Link to={props.isUserLoggedIn ? PATH_ACCOUNT : PATH_LOGIN}
                className="custom-color-inherit">
            <IconButton color="inherit">
              <AccountCircle/>
            </IconButton>
          </Link>
          <div onClick={props.logout}>
            {
              props.isUserLoggedIn ?
                <IconButton color="inherit">
                  <ExitToAppIcon/>
                </IconButton>
                : null
            }
          </div>
        </>
      );
    };

    return (
      <AppBar
        className={isOpen ? navbarStyles.appBar && navbarStyles.appBarShift : navbarStyles.appBar}
        position="absolute"
      >
        <Toolbar className={navbarStyles.toolbar}>
          {renderSlider()}
          {renderTitle()}
          {renderThemeToggler()}
          {renderAccountButton()}
        </Toolbar>
      </AppBar>
    );
  };

  /*----------------------------------------------------------------------------------------------*/
  const renderSideBar = () => {

    const renderListItem = (Component = PR(), text = PR(), redirectPath = PR()) => {
      return (
        <Link to={redirectPath} className="custom-color-inherit">
          <ListItem button>
            <ListItemIcon>
              <Component/>
            </ListItemIcon>
            <ListItemText primary={text}/>
          </ListItem>
        </Link>
      );
    };

    return (
      <Drawer
        variant="permanent"
        open={isOpen}
        classes={{
          paper: clsx(navbarStyles.drawerPaper, !isOpen && navbarStyles.drawerPaperClose),
        }}
      >
        <div className={navbarStyles.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon/>
          </IconButton>
        </div>
        <Divider/>

        <List>
          {renderListItem(EventIcon, strings.app.futureEvents, PATH_FUTURE_EVENTS)}
          {renderListItem(HistoryIcon, strings.app.pastEvents, PATH_PAST_EVENTS)}
        </List>
        <Divider/>

        <List>
          {renderListItem(FlagIcon, strings.app.racetracks, PATH_RACETRACKS)}
        </List>
        <Divider/>

        <List>
          {renderListItem(PeopleIcon, strings.app.members, PATH_MEMBERS)}
        </List>
      </Drawer>
    );
  };

  /*----------------------------------------------------------------------------------------------*/
  const renderContent = () => {
    return (
      <div className={navbarStyles.content}>
        <div className={navbarStyles.appBarSpacer}/>
        {props.children}
      </div>
    );
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className={navbarStyles.root}>
      {renderTopBar()}
      {renderSideBar()}
      {renderContent()}
    </div>
  );
};

Navbar.propTypes = {
  isDarkMode: propTypes.bool.isRequired,
  handleDarkMode: propTypes.func.isRequired,
  isUserLoggedIn: propTypes.bool,
  logout: propTypes.func.isRequired,
};

export default Navbar;
