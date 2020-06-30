import React from "react";
import GlobalStyles from "../../../main/GlobalStyles";
import "../../../index.css";
import Avatar from "@material-ui/core/Avatar";

export const AccountPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const globalStyles = GlobalStyles();
  console.log()
  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className="container-fluid custom-container-xl  text-white mt-5">
      <div className={globalStyles.materialBlueBackground}>
<Avatar />
      </div>
    </div>
  );
};

AccountPage.propTypes = {};

export default AccountPage;
