import React from "react";
import propTypes from "prop-types";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

export const CustomComboBox = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <Autocomplete
      options={props.keyValueArray}
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
 * keyValueArray must contains object with key and value properties e.g obj = {key: "k", value: "v"}
 */
CustomComboBox.propTypes = {
  keyValueArray: propTypes.array.isRequired,
  inputRef: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
};

export default CustomComboBox;
