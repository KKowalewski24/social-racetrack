import React from "react";
import {Link} from "react-router-dom";
import {PATH_ACCOUNT_SETTINGS} from "../../../config/constant/path-constants";
import LetterAvatar from "../../../component/avatar/LetterAvatar";
import SettingsIcon from "@material-ui/icons/Settings";
import GlobalStyles from "../../../main/GlobalStyles";
import "../../../index.css";

export const AccountPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const globalStyles = GlobalStyles();

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className="container custom-container-xl text-white rounded-0 mt-5">
      <div className={globalStyles.materialBlueBackground}>
        <div className="row justify-content-center">
          <div className="my-2">
            <LetterAvatar
              fullname={"Kamil Kowalewski"}
              fontSize={130}
            />

            <Link to={PATH_ACCOUNT_SETTINGS}>
              <SettingsIcon
                fontSize="inherit"
                className="custom-font-size-7 ml-5 custom-light_grey"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

AccountPage.propTypes = {};

export default AccountPage;
