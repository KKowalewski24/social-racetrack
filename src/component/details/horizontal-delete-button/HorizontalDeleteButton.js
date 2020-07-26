import React from "react";
import propTypes from "prop-types";
import HorizontalContainer from "../../util/horizontal-container/HorizontalContainer";
import Button from "@material-ui/core/Button";

export const HorizontalDeleteButton = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <HorizontalContainer
      panelBackgroundColor={props.panelBackgroundColor}
      margin={"custom-hor-cont-margin-bottom-last"}
    >
      <div className="row justify-content-center">
        <Button
          onClick={props.handleDelete}
          color="secondary"
          variant="contained"
          size="medium"
        >
          {props.buttonTextContent}
        </Button>
      </div>
    </HorizontalContainer>
  );
};

HorizontalDeleteButton.propTypes = {
  panelBackgroundColor: propTypes.string.isRequired,
  handleDelete: propTypes.func.isRequired,
  buttonTextContent: propTypes.string.isRequired,
};

export default HorizontalDeleteButton;
