import React, {useContext} from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "../page/main/home-page/HomePage";
import LoginPage from "../page/account/login-page/LoginPage";
import RegisterPage from "../page/account/register-page/RegisterPage";
import AccountPage from "../page/account/account-page/AccountPage";
import PrivateRoute from "../component/util/private-route/PrivateRoute";
import {AuthContext} from "../logic/AuthContextProvider";
import ResetPasswordPage from "../page/account/reset-password-page/ResetPasswordPage";
import FutureEventsPage from "../page/main/future-events-page/FutureEventsPage";
import PastEventsPage from "../page/main/past-events-page/PastEventsPage";
import RacetracksPage from "../page/main/racetracks-page/RacetracksPage";
import MembersPage from "../page/main/members-page/MembersPage";
import {
  PATH_ACCOUNT, PATH_FUTURE_EVENTS, PATH_HOME, PATH_LOGIN, PATH_MEMBERS, PATH_PAST_EVENTS,
  PATH_RACETRACKS, PATH_REGISTER, PATH_RESET_PASSWORD
} from "../config/constant/path-constants";

export const Routes = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {isUserLoggedIn} = useContext(AuthContext);

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <Switch>
      <Route exact path={PATH_HOME} component={HomePage}/>
      <Route exact path={PATH_FUTURE_EVENTS} component={FutureEventsPage}/>

      <PrivateRoute
        exact path={PATH_MEMBERS} component={MembersPage}
        redirectPath={PATH_LOGIN} privacyCondition={isUserLoggedIn}
      />
      <PrivateRoute
        exact path={PATH_PAST_EVENTS} component={PastEventsPage}
        redirectPath={PATH_LOGIN} privacyCondition={isUserLoggedIn}
      />
      <PrivateRoute
        exact path={PATH_RACETRACKS} component={RacetracksPage}
        redirectPath={PATH_LOGIN} privacyCondition={isUserLoggedIn}
      />

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
