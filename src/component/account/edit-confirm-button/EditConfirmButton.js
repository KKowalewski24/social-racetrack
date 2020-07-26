import React from "react";
import propTypes from "prop-types";
import Button from "@material-ui/core/Button";

export const EditConfirmButton = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className="d-flex justify-content-center">
      <Button
        onClick={props.checkInputs}
        type="submit"
        className="mt-4"
        variant="contained"
        color="primary"
      >
        {props.buttonTextContent}
      </Button>
    </div>);
};

EditConfirmButton.propTypes = {
  checkInputs: propTypes.func.isRequired,
  buttonTextContent: propTypes.string.isRequired,
};

export default EditConfirmButton;
