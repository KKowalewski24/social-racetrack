import React from "react";
import propTypes from "prop-types";
import {Redirect} from "react-router-dom";

export const CustomRedirect = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/

  /*------------------------ RETURN REGION ------------------------*/
  if (!!props.redirectPath) {
    return (
      <Redirect to={props.redirectPath}/>
    );
  } else {
    return (
      <Redirect to={props.lastLocation}/>
    );
  }
};

CustomRedirect.propTypes = {
  lastLocation: propTypes.string.isRequired,
  redirectPath: propTypes.string,
};

export default CustomRedirect;
