import React from "react";
import propTypes from "prop-types";
import HorizontalContainer from "../horizontal-container/HorizontalContainer";

export const DetailsTable = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <HorizontalContainer
      panelBackgroundColor={props.panelBackgroundColor}
      margin={props.margin}
    >
      {props.renderTitle && props.renderTitle()}
      <div className="row justify-content-center px-3">
        <div className="table-responsive">
          <table className="table table-bordered text-center text-white mb-0">
            {props.renderHead && props.renderHead()}
            {props.renderBody && props.renderBody()}
          </table>
        </div>
      </div>
    </HorizontalContainer>
  );
};

DetailsTable.propTypes = {
  panelBackgroundColor: propTypes.string.isRequired,
  margin: propTypes.string.isRequired,
  renderTitle: propTypes.func,
  renderHead: propTypes.func,
  renderBody: propTypes.func,
};

export default DetailsTable;
