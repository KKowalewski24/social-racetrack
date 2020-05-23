import React from "react";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {PATH_REGISTER, PATH_RESET_PASSWORD} from "../../../config/constants";
import {loginUser} from "../../../logic/controller/AccountController";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import "../../../index.css";
import GlobalStyles from "../../../main/GlobalStyles";
import {PR} from "../../../logic/Helper";
import {toast, ToastContainer} from "react-toastify";
import {customToast} from "../../../config/ToastSetup";
import WrongCredentialsError from "../../../logic/exception/auth/WrongCredentialsError";
import EmailNotVerifiedError from "../../../logic/exception/auth/EmailNotVerifiedError";

export const LoginPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {register, handleSubmit} = useForm();
  const globalStyles = GlobalStyles();

  const onSubmit = (data = PR()) => {
    //TODO CHECK IF WORKS WELL
    // try {
    //   loginUser(data.email, data.password);
    // } catch (e) {
    //   if (e instanceof WrongCredentialsError) {
    //     toast.error("Wrong email or password", customToast);
    //   }
    //   if (e instanceof EmailNotVerifiedError) {
    //     toast.error("Email has not been verified yet!", customToast);
    //   }
    // }
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
            Sign in
          </Typography>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type="email"
          inputRef={register({required: true})}
          name="email"
          label="Email Address"
          variant="outlined"
          margin="normal"
          fullWidth
          autoFocus
        />

        <TextField
          type="password"
          inputRef={register({required: true, min: 1})}
          name="password"
          label="Password"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <Button type="submit" className="mt-4" variant="contained" color="primary" fullWidth>
          Sign in
        </Button>

        <div className="row justify-content-center mt-2">
          <Link to={PATH_RESET_PASSWORD} className={globalStyles.materialBlueFont}>
            Forgot password?
          </Link>
        </div>

        <div className="row justify-content-center mt-2">
          <Link to={PATH_REGISTER} className={globalStyles.materialBlueFont}>
            Don't have an account? Sign Up
          </Link>
        </div>
      </form>

      <ToastContainer/>
    </div>
  );
};

LoginPage.propTypes = {};

export default LoginPage;
