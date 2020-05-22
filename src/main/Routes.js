import React, {useContext} from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "../page/home-page/HomePage";
import LoginPage from "../page/account/login-page/LoginPage";
import RegisterPage from "../page/account/register-page/RegisterPage";
import AccountPage from "../page/account/account-page/AccountPage";
import {
  PATH_ACCOUNT,
  PATH_HOME,
  PATH_LOGIN,
  PATH_REGISTER,
  PATH_RESET_PASSWORD
} from "../config/constants";
import PrivateRoute from "../component/util/private-route/PrivateRoute";
import {AuthContext} from "../util/AuthContextProvider";
import ResetPasswordPage from "../page/account/reset-password-page/ResetPasswordPage";

export const Routes = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {isUserLoggedIn} = useContext(AuthContext);

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <Switch>
      <Route exact path={PATH_HOME} component={HomePage}/>

      <PrivateRoute
        exact path={PATH_LOGIN} component={LoginPage}
        redirectPath={PATH_ACCOUNT} privacyCondition={!isUserLoggedIn}
      />
      <PrivateRoute
        exact path={PATH_RESET_PASSWORD} component={ResetPasswordPage}
        redirectPath={PATH_ACCOUNT} privacyCondition={!isUserLoggedIn}
      />
      <PrivateRoute
        exact path={PATH_REGISTER} component={RegisterPage}
        redirectPath={PATH_LOGIN} privacyCondition={!isUserLoggedIn}
      />
      <PrivateRoute
        exact path={PATH_ACCOUNT} component={AccountPage}
        redirectPath={PATH_LOGIN} privacyCondition={isUserLoggedIn}
      />

    </Switch>
  );
};

export default Routes;
