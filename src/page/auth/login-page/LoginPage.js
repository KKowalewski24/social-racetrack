import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {PATH_REGISTER, PATH_RESET_PASSWORD} from "../../../config/constant/path-constants";
import {AccountController} from "../../../logic/controller/AccountController";
import {keyValueObjectToArray, PR} from "../../../logic/Helper";
import {errorNotification, warningNotification} from "../../../component/util/notification/notification";
import strings from "../../../config/constant/string-constants";
import ConfirmButton from "../../../component/rest/confirm-button/ConfirmButton";
import {ToastContainer} from "react-toastify";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import {GlobalStyles} from "../../../main/GlobalStyles";
import "../../../index.css";

export const LoginPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {register, handleSubmit, errors} = useForm();
  const [loginCallCounter, setLoginCallCounter] = useState(0);

  const accountController = new AccountController();
  const globalStyles = GlobalStyles();

  const handleLogin = (data = PR()) => {
    if (loginCallCounter === 0) {
      accountController.loginUser(
        data.email, data.password,
        () => errorNotification(strings.loginPage.wrongEmailPassword)
      );

      setLoginCallCounter(loginCallCounter + 1);
    }
  };

  const checkInputs = () => {
    // eslint-disable-next-line no-unused-expressions
    if (keyValueObjectToArray(errors).length > 0) {
      warningNotification(strings.loginPage.inputWarningInfo);
    }
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className="container custom-container-sm custom-page-big-margin">

      <div className="mb-2">
        <div className="row justify-content-center mb-2">
          <Avatar className={globalStyles.materialBlueBackground}>
            <LockOutlinedIcon/>
          </Avatar>
        </div>

        <div className="row justify-content-center">
          <Typography component="h1" variant="h5">
            {strings.loginPage.signIn}
          </Typography>
        </div>
      </div>

      <form onSubmit={handleSubmit(handleLogin)} className="mb-4">
        <TextField
          type="email"
          inputRef={register({required: true})}
          name="email"
          label={strings.loginPage.emailAddress}
          variant="outlined"
          margin="normal"
          fullWidth
          autoFocus
        />

        <TextField
          type="password"
          inputRef={register({required: true})}
          name="password"
          label={strings.loginPage.password}
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <ConfirmButton
          checkInputs={checkInputs}
          buttonTextContent={strings.loginPage.signIn}
          isFullWidth={true}
        />

        <div className="row justify-content-center mt-2">
          <Link to={PATH_RESET_PASSWORD} className={globalStyles.materialBlueFont}>
            {strings.loginPage.forgotPassword}
          </Link>
        </div>

        <div className="row justify-content-center mt-2">
          <Link to={PATH_REGISTER} className={globalStyles.materialBlueFont}>
            {strings.loginPage.dontHaveAccount}
          </Link>
        </div>
      </form>

      <ToastContainer/>
    </div>
  );
};

LoginPage.propTypes = {};

export default LoginPage;
