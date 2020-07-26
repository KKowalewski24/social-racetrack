import React from "react";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import strings from "../../../config/constant/string-constants";
import {ToastContainer} from "react-toastify";
import {keyValueObjectToArray, PR, redirectToPage} from "../../../logic/Helper";
import {PATH_HOME} from "../../../config/constant/path-constants";
import {grantAdmin} from "../../../logic/CloudFunctions";
import {errorNotification, warningNotification} from "../../../component/util/notification/notification";
import ConfirmButton from "../../../component/rest/confirm-button/ConfirmButton";
import TextField from "@material-ui/core/TextField";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import GlobalStyles from "../../../main/GlobalStyles";

export const AdminPanelPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {register, handleSubmit, errors} = useForm();
  const history = useHistory();
  const globalStyles = GlobalStyles();

  const handleGrantAdmin = (data = PR()) => {
    grantAdmin({email: data.email})
      .then((result) => console.log(result))
      .catch((error) => errorNotification(strings.adminPanelPage.grantAdminError));

    redirectToPage(history, PATH_HOME);
  };

  const checkInputs = () => {
    // eslint-disable-next-line no-unused-expressions
    if (keyValueObjectToArray(errors).length > 0) {
      warningNotification(strings.adminPanelPage.inputWarningInfo);
    }
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className="container custom-container-sm custom-page-big-margin">

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

      <form onSubmit={handleSubmit(handleGrantAdmin)} className="mb-4">
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

        <ConfirmButton
          checkInputs={checkInputs}
          buttonTextContent={strings.adminPanelPage.confirm}
          isFullWidth={true}
          optionMargin={"mt-2"}
        />
      </form>

      <ToastContainer/>
    </div>
  );
};

AdminPanelPage.propTypes = {};

export default AdminPanelPage;
