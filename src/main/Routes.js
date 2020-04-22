import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "../page/home-page/HomePage";
import LoginPage from "../page/account/login-page/LoginPage";
import RegisterPage from "../page/account/register-page/RegisterPage";
import AccountPage from "../page/account/account-page/AccountPage";
import {PATH_ACCOUNT, PATH_HOME, PATH_LOGIN, PATH_REGISTER} from "../constants";

export const Routes = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <Switch>
      <Route exact path={PATH_HOME} component={HomePage}/>

      <Route exact path={PATH_LOGIN} component={LoginPage}/>
      <Route exact path={PATH_REGISTER} component={RegisterPage}/>
      <Route exact path={PATH_ACCOUNT} component={AccountPage}/>
    </Switch>
  );
};

export default Routes;
