import React, {useState} from "react";
import propTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export const ArrayComboBox = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const [comboBoxValue, setComboBoxValue] = useState("");

  const handleChange = (event) => {
    setComboBoxValue(event.target.value);
    props.setChosenOption(event.target.value);
  };

  const renderMenuItems = () => {
    return (
      props.keyValueDataArray
      && props.keyValueDataArray.map((it, index) => {
        return (
          <MenuItem key={index} value={it.key}>
            {it.value}
          </MenuItem>
        );
      })
    );
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <FormControl variant="outlined" className="w-100 mt-2">
      <InputLabel id="select-label">
        {props.label}
      </InputLabel>

      <Select
        labelId="select-label"
        value={comboBoxValue}
        onChange={handleChange}
        label={props.label}
      >
        {renderMenuItems()}
      </Select>
    </FormControl>
  );
};

ArrayComboBox.propTypes = {
  keyValueDataArray: propTypes.array.isRequired,
  chosenOption: propTypes.any.isRequired,
  setChosenOption: propTypes.func.isRequired,
  label: propTypes.string.isRequired,
};

export default ArrayComboBox;
