import React from "react";
import propTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

export const SearchBox = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <TextField
      onChange={props.handleChange}
      type="text"
      label={props.label}
      variant="outlined"
      margin="normal"
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon/>
          </InputAdornment>
        ),
      }}
    />
  );
};

SearchBox.propTypes = {
  label: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};

export default SearchBox;
