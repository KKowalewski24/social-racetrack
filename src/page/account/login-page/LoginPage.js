import React from "react";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {PATH_REGISTER, PATH_RESET_PASSWORD} from "../../../config/constant/path-constants";
import {loginUser} from "../../../logic/controller/AccountController";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import "../../../index.css";
import GlobalStyles from "../../../main/GlobalStyles";
import {PR} from "../../../logic/Helper";
import {ToastContainer} from "react-toastify";
import strings from "../../../config/constant/string-constants";
import {errorNotification} from "../../../component/notification/notification";

export const LoginPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {register, handleSubmit} = useForm();
  const globalStyles = GlobalStyles();

  const onSubmit = (data = PR()) => {
    loginUser(
      data.email, data.password,
      () => errorNotification(strings.loginPage.wrongEmailPassword)
    );
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className="container custom-container-sm custom-margin-top-4">

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

      <form onSubmit={handleSubmit(onSubmit)}>
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
          inputRef={register({required: true, min: 1})}
          name="password"
          label={strings.loginPage.password}
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <Button type="submit" className="mt-4" variant="contained" color="primary" fullWidth>
          {strings.loginPage.signIn}
        </Button>

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
