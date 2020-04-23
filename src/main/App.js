import React, {useContext, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";
import {ApplicationContext} from "./controller/ApplicationContextProvider";
import {logoutUser} from "./controller/AccountController";
import Navbar from "../component/navbar/Navbar";
import {NAVBAR_TITLE} from "../constants";
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

export const App = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const [isDarkMode, setIsDarkMode] = useState(true);
  const {isUserLoggedIn} = useContext(ApplicationContext);

  const darkTheme = createMuiTheme({
    palette: {
      type: isDarkMode ? "dark" : "light",
      primary: {
        main: "#2196f3",
      },
    },
  });

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <BrowserRouter>
        <Navbar
          title={NAVBAR_TITLE}
          isDarkMode={isDarkMode}
          handleDarkMode={handleDarkMode}
          isUserLoggedIn={isUserLoggedIn}
          logout={logoutUser}
        >
          <Routes/>
        </Navbar>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
    