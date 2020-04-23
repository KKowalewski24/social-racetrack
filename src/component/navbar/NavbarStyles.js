import {makeStyles} from "@material-ui/core/styles";
import {fade} from "@material-ui/core";

const drawerWidth = 240;

export const NavbarStyles = makeStyles((it) => ({
  root: {
    display: "flex",
  },

  toolbar: {
    paddingRight: 24,
  },

  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...it.mixins.toolbar,
  },

  appBar: {
    backgroundColor: it.palette.primary.main,
    zIndex: it.zIndex.drawer + 1,
    transition: it.transitions.create(["width", "margin"], {
      easing: it.transitions.easing.sharp,
      duration: it.transitions.duration.leavingScreen,
    }),
  },

  appBarShift: {
    backgroundColor: it.palette.primary.main,
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: it.transitions.create(["width", "margin"], {
      easing: it.transitions.easing.sharp,
      duration: it.transitions.duration.enteringScreen,
    }),
  },

  menuButton: {
    marginRight: 36,
  },

  menuButtonHidden: {
    display: "none",
  },

  title: {
    flexGrow: 1,
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

  appBarSpacer: it.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },

  container: {
    paddingTop: it.spacing(4),
    paddingBottom: it.spacing(4),
  },

  paper: {
    padding: it.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },

  fixedHeight: {
    height: 240,
  },

  search: {
    position: "relative",
    borderRadius: it.shape.borderRadius,
    backgroundColor: fade(it.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(it.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: 20,
    width: "100%",
    [it.breakpoints.up("sm")]: {
      marginLeft: it.spacing(1),
      width: "auto",
    },
  },

  searchIcon: {
    width: it.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  inputRoot: {
    color: "inherit",
  },

  inputInput: {
    padding: it.spacing(1, 1, 1, 7),
    transition: it.transitions.create("width"),
    width: "100%",
    [it.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200,
      },
    },
  },

}));

export default NavbarStyles;
