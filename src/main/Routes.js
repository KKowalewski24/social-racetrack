import React, {useContext} from "react";
import {Route, Switch} from "react-router-dom";
import {AuthContext} from "../logic/AuthContextProvider";
import PrivateRoute from "../component/util/private-route/PrivateRoute";
import HomePage from "../page/main/home-page/HomePage";
import LoginPage from "../page/auth/login-page/LoginPage";
import RegisterPage from "../page/auth/register-page/RegisterPage";
import AccountPage from "../page/account/account-page/AccountPage";
import ResetPasswordPage from "../page/auth/reset-password-page/ResetPasswordPage";
import FutureEventsPage from "../page/event/future-events-page/FutureEventsPage";
import PastEventsPage from "../page/event/past-events-page/PastEventsPage";
import RacetracksPage from "../page/racetrack/racetracks-page/RacetracksPage";
import MembersPage from "../page/member/members-page/MembersPage";
import ErrorPage from "../page/util/error-page/ErrorPage";
import CreateEventPage from "../page/event/create-event-page/CreateEventPage";
import AccountSettingsPage from "../page/account/account-settings-page/AccountSettingsPage";
import AdminPanelPage from "../page/admin/admin-panel-page/AdminPanelPage";
import EventDetailsPage from "../page/event/event-details-page/EventDetailsPage";
import MemberDetailsPage from "../page/member/member-details-page/MemberDetailsPage";
import RacetrackDetailsPage from "../page/racetrack/racetrack-details-page/RacetrackDetailsPage";
import CreateRacetrackPage from "../page/racetrack/create-racetrack-page/CreateRacetrackPage";
import {
  PATH_ACCOUNT,
  PATH_ACCOUNT_SETTINGS,
  PATH_ADMIN_PANEL,
  PATH_CREATE_EVENT,
  PATH_CREATE_RACETRACK,
  PATH_EVENT_DETAILS,
  PATH_FUTURE_EVENTS,
  PATH_HOME,
  PATH_LOGIN,
  PATH_MEMBER_DETAILS,
  PATH_MEMBERS,
  PATH_PAST_EVENTS,
  PATH_RACETRACK_DETAILS,
  PATH_RACETRACKS,
  PATH_REGISTER,
  PATH_RESET_PASSWORD
} from "../config/constant/path-constants";

export const Routes = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {isUserLoggedIn, isAdmin} = useContext(AuthContext);

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <Switch>
      <PrivateRoute
        exact path={PATH_ACCOUNT} component={AccountPage}
        redirectPath={PATH_LOGIN} privacyCondition={isUserLoggedIn}
        observedParam={isUserLoggedIn}
      />
      <PrivateRoute
        exact path={PATH_ACCOUNT_SETTINGS} component={AccountSettingsPage}
        redirectPath={PATH_LOGIN} privacyCondition={isUserLoggedIn}
        observedParam={isUserLoggedIn}
      />

      <PrivateRoute
        exact path={PATH_ADMIN_PANEL} component={AdminPanelPage}
        privacyCondition={isAdmin} defaultPath={PATH_HOME}
        observedParam={isAdmin}
      />

      <PrivateRoute
        exact path={PATH_LOGIN} component={LoginPage}
        privacyCondition={!isUserLoggedIn} defaultPath={PATH_ACCOUNT}
        observedParam={isUserLoggedIn}
      />
      <PrivateRoute
        exact path={PATH_RESET_PASSWORD} component={ResetPasswordPage}
        redirectPath={PATH_LOGIN} privacyCondition={!isUserLoggedIn}
        observedParam={isUserLoggedIn}
      />
      <PrivateRoute
        exact path={PATH_REGISTER} component={RegisterPage}
        redirectPath={PATH_ACCOUNT} privacyCondition={!isUserLoggedIn}
        observedParam={isUserLoggedIn}
      />

      <PrivateRoute
        exact path={PATH_CREATE_EVENT} component={CreateEventPage}
        redirectPath={PATH_LOGIN} privacyCondition={isUserLoggedIn}
        observedParam={isUserLoggedIn}
      />
      <PrivateRoute
        exact path={PATH_FUTURE_EVENTS} component={FutureEventsPage}
        redirectPath={PATH_LOGIN} privacyCondition={isUserLoggedIn}
        observedParam={isUserLoggedIn}
      />
      <PrivateRoute
        exact path={PATH_PAST_EVENTS} component={PastEventsPage}
        redirectPath={PATH_LOGIN} privacyCondition={isUserLoggedIn}
        observedParam={isUserLoggedIn}
      />
      <PrivateRoute
        exact path={PATH_EVENT_DETAILS} component={EventDetailsPage}
        redirectPath={PATH_LOGIN} privacyCondition={isUserLoggedIn}
        observedParam={isUserLoggedIn}
      />

      <PrivateRoute
        exact path={PATH_HOME} component={HomePage}
        redirectPath={PATH_FUTURE_EVENTS} privacyCondition={!isUserLoggedIn}
        observedParam={isUserLoggedIn}
      />

      <PrivateRoute
        exact path={PATH_MEMBERS} component={MembersPage}
        redirectPath={PATH_LOGIN} privacyCondition={isUserLoggedIn}
        observedParam={isUserLoggedIn}
      />
      <PrivateRoute
        exact path={PATH_MEMBER_DETAILS} component={MemberDetailsPage}
        redirectPath={PATH_LOGIN} privacyCondition={isUserLoggedIn}
        observedParam={isUserLoggedIn}
      />

      <PrivateRoute
        exact path={PATH_CREATE_RACETRACK} component={CreateRacetrackPage}
        privacyCondition={isAdmin} defaultPath={PATH_HOME}
        observedParam={isAdmin}
      />
      <PrivateRoute
        exact path={PATH_RACETRACKS} component={RacetracksPage}
        privacyCondition={true}
        observedParam={isUserLoggedIn}
      />
      <PrivateRoute
        exact path={PATH_RACETRACK_DETAILS} component={RacetrackDetailsPage}
        privacyCondition={true}
        observedParam={isUserLoggedIn}
      />

      <Route component={ErrorPage}/>
    </Switch>
  );
};

export default Routes;
