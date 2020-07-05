import React, {useContext} from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "../page/main/home-page/HomePage";
import LoginPage from "../page/auth/login-page/LoginPage";
import RegisterPage from "../page/auth/register-page/RegisterPage";
import AccountPage from "../page/account/account-page/AccountPage";
import PrivateRoute from "../component/util/private-route/PrivateRoute";
import {AuthContext} from "../logic/AuthContextProvider";
import ResetPasswordPage from "../page/auth/reset-password-page/ResetPasswordPage";
import FutureEventsPage from "../page/event/future-events-page/FutureEventsPage";
import PastEventsPage from "../page/event/past-events-page/PastEventsPage";
import RacetracksPage from "../page/main/racetracks-page/RacetracksPage";
import MembersPage from "../page/main/members-page/MembersPage";
import ErrorPage from "../page/util/error-page/ErrorPage";
import CreateEventPage from "../page/event/create-event-page/CreateEventPage";
import AccountSettingsPage from "../page/account/account-settings-page/AccountSettingsPage";
import AdminPanelPage from "../page/admin/admin-panel-page/AdminPanelPage";
import {
  PATH_ACCOUNT,
  PATH_ACCOUNT_SETTINGS,
  PATH_ADMIN_PANEL,
  PATH_CREATE_EVENT,
  PATH_FUTURE_EVENTS,
  PATH_HOME,
  PATH_LOGIN,
  PATH_MEMBERS,
  PATH_PAST_EVENTS,
  PATH_RACETRACKS,
  PATH_REGISTER,
  PATH_RESET_PASSWORD
} from "../config/constant/path-constants";

export const Routes = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {isUserLoggedIn} = useContext(AuthContext);

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <Switch>
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
      <PrivateRoute
        exact path={PATH_ACCOUNT_SETTINGS} component={AccountSettingsPage}
        redirectPath={PATH_LOGIN} privacyCondition={isUserLoggedIn}
      />
      {/*TODO - SET CONDITION*/}
      <PrivateRoute
        exact path={PATH_ADMIN_PANEL} component={AdminPanelPage}
        redirectPath={PATH_HOME} privacyCondition={true}
      />

      <Route exact path={PATH_HOME} component={HomePage}/>
      <Route exact path={PATH_RACETRACKS} component={RacetracksPage}/>
      <PrivateRoute
        exact path={PATH_FUTURE_EVENTS} component={FutureEventsPage}
        redirectPath={PATH_LOGIN} privacyCondition={isUserLoggedIn}
      />
      <PrivateRoute
        exact path={PATH_CREATE_EVENT} component={CreateEventPage}
        redirectPath={PATH_LOGIN} privacyCondition={isUserLoggedIn}
      />
      <PrivateRoute
        exact path={PATH_PAST_EVENTS} component={PastEventsPage}
        redirectPath={PATH_LOGIN} privacyCondition={isUserLoggedIn}
      />
      <PrivateRoute
        exact path={PATH_MEMBERS} component={MembersPage}
        redirectPath={PATH_LOGIN} privacyCondition={isUserLoggedIn}
      />

      <Route component={ErrorPage}/>
    </Switch>
  );
};

export default Routes;
