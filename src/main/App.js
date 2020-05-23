import React, {useContext, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";
import {AuthContext} from "../logic/AuthContextProvider";
import {logoutUser} from "../logic/controller/AccountController";
import {strings} from "../config/constant/string-constants";
import Navbar from "../component/navbar/Navbar";
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

export const App = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const [isDarkMode, setIsDarkMode] = useState(true);
  const {isUserLoggedIn} = useContext(AuthContext);

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
          title={strings.app.title}
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
