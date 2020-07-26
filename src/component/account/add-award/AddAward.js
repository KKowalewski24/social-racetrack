import React from "react";
import propTypes from "prop-types";
import {useForm} from "react-hook-form";
import strings from "../../../config/constant/string-constants";
import {getCurrentYear, keyValueObjectToArray} from "../../../logic/Helper";
import EditConfirmButton from "../edit-confirm-button/EditConfirmButton";
import {ToastContainer} from "react-toastify";
import {warningNotification} from "../../util/notification/notification";
import TextField from "@material-ui/core/TextField";

export const AddAward = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {register, handleSubmit, errors} = useForm();

  const checkInputs = () => {
    // eslint-disable-next-line no-unused-expressions
    if (keyValueObjectToArray(errors).length > 0) {
      warningNotification(strings.accountSettingsPage.inputWarningInfo);
    }
  };

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

        <EditConfirmButton
          checkInputs={checkInputs}
          buttonTextContent={strings.accountSettingsPage.confirm}
        />
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
