import React, {useEffect, useState} from "react";
import propTypes from "prop-types";
import {Route, useLocation} from "react-router-dom";
import CustomRedirect from "../custom-redirect/CustomRedirect";

export const PrivateRoute = ({privacyCondition, redirectPath, component: Component, ...rest}) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const [lastLocation, setLastLocation] = useState("");
  const location = useLocation();

  useEffect(() => {
    setLastLocation(location.pathname);
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

PrivateRoute.propTypes = {
  exact: propTypes.bool.isRequired,
  path: propTypes.string.isRequired,
  component: propTypes.func.isRequired,
  privacyCondition: propTypes.any,
  redirectPath: propTypes.string,
};

export default PrivateRoute;
