import React from "react";
import ErrorMessage from "../../../component/util/error-message/ErrorMessage";
import {PATH_HOME} from "../../../config/constant/path-constants";
import {GlobalStyles} from "../../../main/GlobalStyles";
import strings from "../../../config/constant/string-constants";

export const ErrorPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const globalStyles = GlobalStyles();

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <ErrorMessage
      title={strings.errorPage.title}
      message={strings.errorPage.message}
      redirectPath={PATH_HOME}
      redirectMessage={strings.errorPage.redirectMessage}
      styles={globalStyles.materialBlueFont}
    />
  );
};

ErrorPage.propTypes = {};

export default ErrorPage;
