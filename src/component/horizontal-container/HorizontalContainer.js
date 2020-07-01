import React from "react";
import propTypes from "prop-types";

export const HorizontalContainer = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className="container-fluid text-white mt-4">
      <div className={"border border-primary rounded " + props.panelBackgroundColor}>
        {props.children}
      </div>
    </div>
  );
};

HorizontalContainer.propTypes = {
  panelBackgroundColor: propTypes.string.isRequired,
};

export default HorizontalContainer;
