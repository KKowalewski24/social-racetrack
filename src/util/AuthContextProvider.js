import React, {createContext, useEffect, useState} from "react";
import config from "../config/config";

export const AuthContext = createContext(null);

export const AuthContextProvider = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const [firebaseAuthState, setFirebaseAuthState] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    config.auth().onAuthStateChanged(setFirebaseAuthState);
    firebaseAuthState ? setIsUserLoggedIn(true) : setIsUserLoggedIn(false);
  }, [firebaseAuthState]);

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <AuthContext.Provider value={{isUserLoggedIn}}>
      {props.children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {};

export default AuthContextProvider;
