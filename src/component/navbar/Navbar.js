import React, {useState} from "react";
import propTypes from "prop-types";
import {PR} from "../../logic/Helper";
import {Link} from "react-router-dom";
import {PATH_ACCOUNT, PATH_HOME, PATH_LOGIN} from "../../config/constant/path-constants";
import clsx from "clsx";
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Toolbar,
  Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";

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
            {props.title}
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

        {/*TODO MOVE STRING INTO CONSTANTS*/}
        <List>
          {renderListItem(DashboardIcon, "Dashboard", PATH_HOME)}
          {renderListItem(ShoppingCartIcon, "Orders", PATH_HOME)}
          {renderListItem(PeopleIcon, "Customers", PATH_HOME)}
          {renderListItem(BarChartIcon, "Reports", PATH_HOME)}
          {renderListItem(LayersIcon, "Integrations", PATH_HOME)}
        </List>

        <Divider/>

        <List>
          <ListSubheader inset>
            {/*TODO MOVE STRING INTO CONSTANTS*/}
            Saved reports
          </ListSubheader>
          {/*TODO MOVE STRING INTO CONSTANTS*/}
          {renderListItem(AssignmentIcon, "month", PATH_HOME)}
          {renderListItem(AssignmentIcon, "quarter", PATH_HOME)}
          {renderListItem(AssignmentIcon, "year", PATH_HOME)}
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
  title: propTypes.string.isRequired,
  isDarkMode: propTypes.bool.isRequired,
  handleDarkMode: propTypes.func.isRequired,
  isUserLoggedIn: propTypes.bool,
  logout: propTypes.func.isRequired,
};

export default Navbar;
