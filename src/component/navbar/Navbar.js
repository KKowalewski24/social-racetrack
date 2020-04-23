import React, {useState} from "react";
import propTypes from "prop-types";
import {PR} from "../../main/controller/Util";
import {Link} from "react-router-dom";
import {PATH_HOME} from "../../constants";
import clsx from "clsx";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import NavbarStyles from "./NavbarStyles";

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
    // return (
    //
    // );
  };

  /*----------------------------------------------------------------------------------------------*/
  const renderSideBar = () => {

    const renderListItem = (Component = PR(), text = PR(), redirectPath = PR()) => {
      return (
          <Link to={redirectPath}>
            <ListItem button>
              <ListItemIcon>
                <Component/>
              </ListItemIcon>
              <ListItemText primary={text}/>
            </ListItem>
          </Link>
      )
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
          {renderListItem(DashboardIcon, "Dashboard", PATH_HOME)}
          {renderListItem(ShoppingCartIcon, "Orders", PATH_HOME)}
          {renderListItem(PeopleIcon, "Customers", PATH_HOME)}
          {renderListItem(BarChartIcon, "Reports", PATH_HOME)}
          {renderListItem(LayersIcon, "Integrations", PATH_HOME)}
        </List>

        <Divider/>

        <List>
          <ListSubheader inset>
            Saved reports
          </ListSubheader>
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
    )
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
