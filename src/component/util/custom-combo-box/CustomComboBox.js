import React from "react";
import propTypes from "prop-types";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {getEnumKeyValueArray} from "../../../logic/Helper";
import TextField from "@material-ui/core/TextField";

export const CustomComboBox = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const getPassedValue = () => {
    if (!!props.enum && !!props.dataArray) {
      throw new Error("Passing either enum and dataArray is not allowed");
    }

    if (!!props.enum) {
      return getEnumKeyValueArray(props.enum);
    } else if (!!props.dataArray) {
      return props.dataArray;
    } else {
      throw new Error("It is required to pass enum or dataArray");
    }
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <Autocomplete
      options={getPassedValue()}
      getOptionLabel={(it) => it.value}
      getOptionSelected={(option, value) => option.value === value.value}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            inputRef={props.inputRef}
            name={props.name}
            label={props.label}
            variant="outlined"
            margin="normal"
            fullWidth
          />
        );
      }}
    />
  );
};

/**
 * Passing an enum or dataArray is allowed, but now both of them
 */
CustomComboBox.propTypes = {
  enum: propTypes.object,
  dataArray: propTypes.array,
  inputRef: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
};

export default CustomComboBox;
