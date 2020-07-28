import React, {useEffect, useState} from "react";
import propTypes from "prop-types";
import {Route, useLocation} from "react-router-dom";
import CustomRedirect from "../custom-redirect/CustomRedirect";

export const PrivateRoute = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {privacyCondition, redirectPath, defaultPath, component: Component, ...rest} = props;

  const [lastLocation, setLastLocation] = useState(undefined);
  const location = useLocation();

  useEffect(() => {
    if (defaultPath) {
      setLastLocation(defaultPath);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.observedParam]);

  useEffect(() => {
    setLastLocation(location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*------------------------ RETURN REGION ------------------------*/
  return (
    lastLocation ?
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
      : null
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
  observedParam: propTypes.bool,
};

export default PrivateRoute;
