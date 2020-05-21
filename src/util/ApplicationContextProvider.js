import React, {createContext, useEffect, useState} from "react";
import config from "../config";

export const ApplicationContext = createContext(null);

export const ApplicationContextProvider = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const [firebaseAuthState, setFirebaseAuthState] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    //TODO UNCOMMENT
    // config.auth().onAuthStateChanged(setFirebaseAuthState);
    // firebaseAuthState ? setIsUserLoggedIn(true) : setIsUserLoggedIn(false);
  }, [firebaseAuthState]);

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <ApplicationContext.Provider value={{isUserLoggedIn}}>
      {props.children}
    </ApplicationContext.Provider>
  );
};

ApplicationContextProvider.propTypes = {};

export default ApplicationContextProvider;
    