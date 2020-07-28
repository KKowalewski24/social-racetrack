import React from "react";
import propTypes from "prop-types";
import CustomComboBox from "../../util/custom-combo-box/CustomComboBox";
import {getEnumKeyValueArray} from "../../../logic/Helper";

export const EnumComboBox = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <CustomComboBox
      keyValueArray={getEnumKeyValueArray(props.enum)}
      inputRef={props.inputRef}
      name={props.name}
      label={props.label}
    />
  );
};

EnumComboBox.propTypes = {
  enum: propTypes.object.isRequired,
  inputRef: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
};

export default EnumComboBox;
