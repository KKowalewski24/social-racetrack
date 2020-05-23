import React from "react";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {PATH_LOGIN} from "../../../config/constant/path-constants";
import {registerUser} from "../../../logic/controller/AccountController";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import GlobalStyles from "../../../main/GlobalStyles";
import {PR} from "../../../logic/Helper";
import strings from "../../../config/constant/string-constants";
import {ToastContainer} from "react-toastify";
import {errorNotification, warningNotification} from "../../../component/notification/notification";

export const RegisterPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {register, handleSubmit} = useForm();
  const globalStyles = GlobalStyles();

  const onSubmit = (data = PR()) => {
    registerUser(
      data.firstName, data.lastName, data.email, data.password,
      () => warningNotification(strings.registerPage.verificationEmailNotSent),
      () => errorNotification(strings.registerPage.userAccountNotCreated)
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
            {strings.registerPage.signUp}
          </Typography>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="row">
          <div className="col-12 col-sm-6">
            <TextField
              type="text"
              inputRef={register({required: true})}
              name="firstName"
              label={strings.registerPage.firstName}
              variant="outlined"
              margin="normal"
              fullWidth
              autoFocus
            />
          </div>

          <div className="col-12 col-sm-6">
            <TextField
              type="text"
              inputRef={register({required: true})}
              name="lastName"
              label={strings.registerPage.lastName}
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </div>
        </div>

        <TextField
          type="email"
          inputRef={register({required: true})}
          name="email"
          label={strings.registerPage.emailAddress}
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <TextField
          type="password"
          inputRef={register({required: true})}
          name="password"
          label={strings.registerPage.password}
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <Button type="submit" className="mt-4" variant="contained" color="primary" fullWidth>
          {strings.registerPage.signUp}
        </Button>

        <div className="row justify-content-center mt-2">
          <Link to={PATH_LOGIN} className={globalStyles.materialBlueFont}>
            {strings.registerPage.alreadyHaveAccount}
          </Link>
        </div>
      </form>

      <ToastContainer/>
    </div>
  );
};

RegisterPage.propTypes = {};

export default RegisterPage;
