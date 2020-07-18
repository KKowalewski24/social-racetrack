import React from "react";
import propTypes from "prop-types";
import HorizontalContainer from "../../util/horizontal-container/HorizontalContainer";

export const DetailsTable = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <HorizontalContainer
      panelBackgroundColor={props.panelBackgroundColor}
      margin={props.margin}
    >
      <div className="row justify-content-center px-3">
        <table className="table table-responsive table-bordered text-center w-auto text-white mb-0">
          {props.children}
        </table>
      </div>
    </HorizontalContainer>
  );
};

DetailsTable.propTypes = {
  panelBackgroundColor: propTypes.string.isRequired,
  margin: propTypes.string.isRequired,
};

export default DetailsTable;
