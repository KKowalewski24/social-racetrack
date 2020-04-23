import {makeStyles} from "@material-ui/core/styles";
import {fade} from "@material-ui/core";

const drawerWidth = 240;

export const NavbarStyles = makeStyles((it) => ({

  root: {
    display: "flex",
  },

  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...it.mixins.toolbar,
  },

  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: it.transitions.create("width", {
      easing: it.transitions.easing.sharp,
      duration: it.transitions.duration.enteringScreen,
    }),
  },

  drawerPaperClose: {
    overflowX: "hidden",
    transition: it.transitions.create("width", {
      easing: it.transitions.easing.sharp,
      duration: it.transitions.duration.leavingScreen,
    }),
    width: it.spacing(7),
    [it.breakpoints.up("sm")]: {
      width: it.spacing(9),
    },
  },

}));

export default NavbarStyles;
