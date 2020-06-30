import React, {useContext, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";
import {AuthContext} from "../logic/AuthContextProvider";
import {AccountController} from "../logic/controller/AccountController";
import Navbar from "../component/navbar/Navbar";
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

export const App = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const [isDarkMode, setIsDarkMode] = useState(true);
  const {isUserLoggedIn} = useContext(AuthContext);
  const accountController = new AccountController();

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
          isDarkMode={isDarkMode}
          handleDarkMode={handleDarkMode}
          isUserLoggedIn={isUserLoggedIn}
          logout={accountController.logoutUser}
        >
          <Routes/>
        </Navbar>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
