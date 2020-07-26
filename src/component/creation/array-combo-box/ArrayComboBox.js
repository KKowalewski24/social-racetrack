import React from "react";
import propTypes from "prop-types";
import CustomComboBox from "../../util/custom-combo-box/CustomComboBox";

export const ArrayComboBox = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <CustomComboBox
      keyValueArray={props.dataArray}
      inputRef={props.inputRef}
      name={props.name}
      label={props.label}
    />
  );
};

ArrayComboBox.propTypes = {
  dataArray: propTypes.array.isRequired,
  inputRef: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
};

export default ArrayComboBox;
