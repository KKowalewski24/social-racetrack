import React from "react";
import propTypes from "prop-types";
import {useForm} from "react-hook-form";
import {keyValueObjectToArray} from "../../../logic/Helper";
import {warningNotification} from "../../util/notification/notification";
import strings from "../../../config/constant/string-constants";
import {ToastContainer} from "react-toastify";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export const EditUserData = (props) => {

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
    <div className={"container custom-container-sm " + props.margin}>
      <form onSubmit={handleSubmit(props.handleEditUser)}>

        <TextField
          type="text"
          defaultValue={props.previousFirstName}
          inputRef={register({required: true})}
          name="firstName"
          label={strings.accountSettingsPage.firstName}
          variant="outlined"
          margin="normal"
          fullWidth
          autoFocus
        />

        <TextField
          type="text"
          defaultValue={props.previousLastName}
          inputRef={register({required: true})}
          name="lastName"
          label={strings.accountSettingsPage.lastName}
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <TextField
          type="text"
          defaultValue={props.previousCountry}
          inputRef={register({required: true})}
          name="country"
          label={strings.accountSettingsPage.country}
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <TextField
          type="text"
          defaultValue={props.previousCity}
          inputRef={register({required: true})}
          name="city"
          label={strings.accountSettingsPage.city}
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <div className="d-flex justify-content-center">
          <Button
            onClick={checkInputs}
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

EditUserData.propTypes = {
  handleEditUser: propTypes.func.isRequired,
  previousFirstName: propTypes.string.isRequired,
  previousLastName: propTypes.string.isRequired,
  previousCountry: propTypes.string.isRequired,
  previousCity: propTypes.string.isRequired,
  backgroundColor: propTypes.string.isRequired,
  margin: propTypes.string.isRequired,
};

export default EditUserData;
