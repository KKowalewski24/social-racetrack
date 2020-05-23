import React from "react";
import {useForm} from "react-hook-form";
import {PR} from "../../../logic/Helper";
import {resetUserPassword} from "../../../logic/controller/AccountController";
import GlobalStyles from "../../../main/GlobalStyles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import RestoreIcon from "@material-ui/icons/Restore";
import {PATH_LOGIN} from "../../../config/constant/path-constants";
import {toast, ToastContainer} from "react-toastify";
import {customToast} from "../../../config/toast-config";
import ResetUserPasswordError from "../../../logic/exception/auth/ResetUserPasswordError";
import strings from "../../../config/constant/string-constants";

export const ResetPasswordPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {register, handleSubmit} = useForm();
  const globalStyles = GlobalStyles();

  const onSubmit = (data = PR()) => {
    //TODO CHECK IF WORKS WELL
    // try {
    //   resetUserPassword(data.email);
    //   window.location.replace(PATH_LOGIN);
    // } catch (e) {
    //   if (e instanceof ResetUserPasswordError) {
    //     toast.error("Check if email is correct", customToast);
    //   }
    // }
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

      <form onSubmit={handleSubmit(onSubmit)}>
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

        <Button type="submit" className="mt-2" variant="contained" color="primary" fullWidth>
          {strings.resetPasswordPage.sendEmail}
        </Button>
      </form>

      <ToastContainer/>
    </div>
  );
};

ResetPasswordPage.propTypes = {};

export default ResetPasswordPage;
