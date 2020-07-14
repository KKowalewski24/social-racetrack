import React from "react";
import {useForm} from "react-hook-form";
import {keyValueObjectToArray, PR} from "../../../logic/Helper";
import {AccountController} from "../../../logic/controller/AccountController";
import {PATH_LOGIN} from "../../../config/constant/path-constants";
import {warningNotification} from "../../../component/util/notification/notification";
import {ToastContainer} from "react-toastify";
import strings from "../../../config/constant/string-constants";
import GlobalStyles from "../../../main/GlobalStyles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import RestoreIcon from "@material-ui/icons/Restore";

export const ResetPasswordPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {register, handleSubmit, errors} = useForm();
  const accountController = new AccountController();
  const globalStyles = GlobalStyles();

  const handleResetPassword = (data = PR()) => {
    accountController.resetUserPassword(
      data.email,
      () => warningNotification(strings.resetPasswordPage.checkEmailCorrect)
    );
    window.location.replace(PATH_LOGIN);
  };

  const checkInputs = () => {
    // eslint-disable-next-line no-unused-expressions
    if (keyValueObjectToArray(errors).length > 0) {
      warningNotification(strings.resetPasswordPage.inputWarningInfo);
    }
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className="container custom-container-sm custom-margin-top-4">

      <div className="mb-2">
        <div className="row justify-content-center mb-2">
          <Avatar className={globalStyles.materialBlueBackground}>
            <RestoreIcon/>
          </Avatar>
        </div>

        <div className="row justify-content-center">
          <Typography component="h1" variant="h5">
            {strings.resetPasswordPage.resetPassword}
          </Typography>
        </div>
      </div>

      <form onSubmit={handleSubmit(handleResetPassword)} className="mb-4">
        <TextField
          type="email"
          inputRef={register({required: true})}
          name="email"
          label={strings.resetPasswordPage.emailAddress}
          variant="outlined"
          margin="normal"
          fullWidth
          autoFocus
        />

        <Button
          onClick={checkInputs}
          type="submit"
          className="mt-2"
          variant="contained"
          color="primary"
          fullWidth
        >
          {strings.resetPasswordPage.sendEmail}
        </Button>
      </form>

      <ToastContainer/>
    </div>
  );
};

ResetPasswordPage.propTypes = {};

export default ResetPasswordPage;
