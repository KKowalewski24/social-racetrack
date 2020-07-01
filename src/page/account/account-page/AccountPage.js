import React from "react";
import {Link} from "react-router-dom";
import {PATH_ACCOUNT_SETTINGS} from "../../../config/constant/path-constants";
import LetterAvatar from "../../../component/avatar/LetterAvatar";
import SettingsIcon from "@material-ui/icons/Settings";
import GlobalStyles from "../../../main/GlobalStyles";
import "../../../index.css";
import HorizontalContainer from "../../../component/horizontal-container/HorizontalContainer";

export const AccountPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const globalStyles = GlobalStyles();

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <HorizontalContainer panelBackgroundColor={globalStyles.lightGreyBackground}>
      <div className="my-2">
        <LetterAvatar
          fullname={"Kamil Kowalewski"}
          fontSize={110}
        />

        <Link to={PATH_ACCOUNT_SETTINGS}>
          <SettingsIcon
            fontSize="inherit"
            className="custom-font-size-5 ml-5 text-white"
          />
        </Link>
      </div>
    </HorizontalContainer>
  );
};

AccountPage.propTypes = {};

export default AccountPage;
