import React from "react";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import {keyValueObjectToArray, PR, redirectToPage} from "../../../logic/Helper";
import {AccountController} from "../../../logic/controller/AccountController";
import {PATH_LOGIN} from "../../../config/constant/path-constants";
import {warningNotification} from "../../../component/util/notification/notification";
import {ToastContainer} from "react-toastify";
import strings from "../../../config/constant/string-constants";
import ConfirmButton from "../../../component/rest/confirm-button/ConfirmButton";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import RestoreIcon from "@material-ui/icons/Restore";
import GlobalStyles from "../../../main/GlobalStyles";

export const ResetPasswordPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {register, handleSubmit, errors} = useForm();
  const history = useHistory();
  const accountController = new AccountController();
  const globalStyles = GlobalStyles();

  const handleResetPassword = (data = PR()) => {
    accountController.resetUserPassword(
      data.email,
      () => warningNotification(strings.resetPasswordPage.checkEmailCorrect)
    );
    redirectToPage(history, PATH_LOGIN);
  };

  const checkInputs = () => {
    // eslint-disable-next-line no-unused-expressions
    if (keyValueObjectToArray(errors).length > 0) {
      warningNotification(strings.resetPasswordPage.inputWarningInfo);
    }
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className="container custom-container-sm custom-page-big-margin">

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

        <ConfirmButton
          checkInputs={checkInputs}
          buttonTextContent={strings.resetPasswordPage.sendEmail}
          isFullWidth={true}
          optionMargin={"mt-2"}
        />
      </form>

      <ToastContainer/>
    </div>
  );
};

ResetPasswordPage.propTypes = {};

export default ResetPasswordPage;
