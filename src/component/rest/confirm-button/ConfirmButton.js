import React from "react";
import propTypes from "prop-types";
import Button from "@material-ui/core/Button";

export const ConfirmButton = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className="d-flex justify-content-center">
      <Button
        onClick={props.checkInputs}
        type="submit"
        className={!!props.optionMargin ? props.optionMargin : "mt-4"}
        variant="contained"
        color="primary"
        fullWidth={props.isFullWidth}
      >
        {props.buttonTextContent}
      </Button>
    </div>
  );
};

/**
 * Default margin is "mt-4"
 */
ConfirmButton.propTypes = {
  checkInputs: propTypes.func.isRequired,
  buttonTextContent: propTypes.string.isRequired,
  isFullWidth: propTypes.bool,
  optionMargin: propTypes.string,
};

export default ConfirmButton;
