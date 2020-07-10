import React, {createContext, useEffect, useState} from "react";
import config from "../config/config";

export const AuthContext = createContext(null);

export const AuthContextProvider = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const [firebaseAuthState, setFirebaseAuthState] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(false);

    config.auth().onAuthStateChanged(setFirebaseAuthState);
    firebaseAuthState ? setIsUserLoggedIn(true) : setIsUserLoggedIn(false);

    config.auth().currentUser && config.auth().currentUser.getIdTokenResult()
      .then((idTokenResult) => {
        setIsAdmin(idTokenResult.claims.admin);
      })
      .catch((err) => console.log(err));

  }, [firebaseAuthState]);

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <AuthContext.Provider value={{isUserLoggedIn, isAdmin}}>
      {props.children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {};

export default AuthContextProvider;
