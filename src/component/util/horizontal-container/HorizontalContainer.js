import React from "react";
import propTypes from "prop-types";

export const HorizontalContainer = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className={"container-fluid text-white " + props.margin}>
      <div className={"border border-primary rounded py-2 " + props.panelBackgroundColor}>
        {props.children}
      </div>
    </div>
  );
};

HorizontalContainer.propTypes = {
  panelBackgroundColor: propTypes.string.isRequired,
  margin: propTypes.string.isRequired,
};

export default HorizontalContainer;
