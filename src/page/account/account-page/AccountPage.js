import React from "react";
import GlobalStyles from "../../../main/GlobalStyles";
import {IconButton} from "@material-ui/core";
import BuildIcon from "@material-ui/icons/Build";
import LetterAvatar from "../../../component/avatar/LetterAvatar";
import "../../../index.css";

export const AccountPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const globalStyles = GlobalStyles();

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className="container custom-container-xl text-white mt-5">
      <div className={globalStyles.materialBlueBackground}>
        <div className="row justify-content-center">
          <div className="my-3">
            <LetterAvatar
              fullname={"Kamil Kowalewski"}
              fontSize={40}
              backgroundColor={"#ffc107"}
            />

            <IconButton color="inherit">
              <BuildIcon fontSize="large"/>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

AccountPage.propTypes = {};

export default AccountPage;
