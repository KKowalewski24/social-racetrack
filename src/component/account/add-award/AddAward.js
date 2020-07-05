import React from "react";
import propTypes from "prop-types";
import {useForm} from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import strings from "../../../config/constant/string-constants";
import {getCurrentYear} from "../../../logic/Helper";
import Button from "@material-ui/core/Button";
import {ToastContainer} from "react-toastify";

export const AddAward = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {register, handleSubmit} = useForm();

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className={"container custom-container-md " + props.margin}>
      <form onSubmit={handleSubmit(props.handleAddAward)}>

        <TextField
          type="text"
          inputRef={register({required: true})}
          name="description"
          label={strings.accountSettingsPage.description}
          variant="outlined"
          margin="normal"
          fullWidth
          autoFocus
        />

        <div className="container custom-container-sm">
          <TextField
            type="number"
            inputRef={register({required: true, min: 1900, max: getCurrentYear()})}
            name="year"
            label={strings.accountSettingsPage.year}
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </div>

        <div className="d-flex justify-content-center">
          <Button
            type="submit"
            className="mt-4"
            variant="contained"
            color="primary"
          >
            {strings.accountSettingsPage.confirm}
          </Button>
        </div>

      </form>

      <ToastContainer/>
    </div>
  );
};

AddAward.propTypes = {
  handleAddAward: propTypes.func.isRequired,
  backgroundColor: propTypes.string.isRequired,
  margin: propTypes.string.isRequired,
};

export default AddAward;
