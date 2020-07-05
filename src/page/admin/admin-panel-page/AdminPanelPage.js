import React from "react";
import {useForm} from "react-hook-form";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import strings from "../../../config/constant/string-constants";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {ToastContainer} from "react-toastify";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import {PR} from "../../../logic/Helper";
import GlobalStyles from "../../../main/GlobalStyles";
import {PATH_HOME} from "../../../config/constant/path-constants";

export const AdminPanelPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {register, handleSubmit} = useForm();
  const globalStyles = GlobalStyles();

  const onSubmit = (data = PR()) => {
    console.log(data.email);
    //TODO ADD IMPL - GRANT ADMIN
    window.location.replace(PATH_HOME);
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className="container custom-container-sm custom-margin-top-4">

      <div className="mb-2">
        <div className="row justify-content-center mb-2">
          <Avatar className={globalStyles.materialBlueBackground}>
            <SupervisorAccountIcon/>
          </Avatar>
        </div>

        <div className="row justify-content-center">
          <Typography component="h1" variant="h5">
            {strings.adminPanelPage.grantAdminStatus}
          </Typography>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
        <TextField
          type="email"
          inputRef={register({required: true})}
          name="email"
          label={strings.adminPanelPage.emailAddress}
          variant="outlined"
          margin="normal"
          fullWidth
          autoFocus
        />

        <Button
          type="submit"
          className="mt-2"
          variant="contained"
          color="primary"
          fullWidth
        >
          {strings.adminPanelPage.confirm}
        </Button>
      </form>

      <ToastContainer/>
    </div>
  );
};

AdminPanelPage.propTypes = {};

export default AdminPanelPage;
