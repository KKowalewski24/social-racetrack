import React, {useContext, useEffect, useState} from "react";
import propTypes from "prop-types";
import {Route, useLocation} from "react-router-dom";
import CustomRedirect from "../custom-redirect/CustomRedirect";
import {AuthContext} from "../../../logic/AuthContextProvider";

export const PrivateRoute = ({privacyCondition, redirectPath,
                               defaultPath, component: Component, ...rest}) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {isUserLoggedIn} = useContext(AuthContext);
  const [lastLocation, setLastLocation] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (defaultPath) {
      setLastLocation(defaultPath);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserLoggedIn]);

  useEffect(() => {
    setLastLocation(location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <Route
      {...rest}
      render={(it) => {
        return (
          !!privacyCondition ?
            <Component {...it}/> :
            <CustomRedirect
              redirectPath={redirectPath}
              lastLocation={lastLocation}
            />
        );
      }
      }
    />
  );
};

/**
 * Use defaultPath only if redirectPath is not used because
 * it won't be taken into consideration !!!
 */
PrivateRoute.propTypes = {
  exact: propTypes.bool.isRequired,
  path: propTypes.string.isRequired,
  component: propTypes.func.isRequired,
  privacyCondition: propTypes.any,
  redirectPath: propTypes.string,
  defaultPath: propTypes.string,
};

export default PrivateRoute;
