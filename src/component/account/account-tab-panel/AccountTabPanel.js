import React from "react";
import propTypes from "prop-types";
import Button from "@material-ui/core/Button";
import strings from "../../../config/constant/string-constants";
import Paper from "@material-ui/core/Paper";

export const AccountTabPanel = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const renderButton = (text, buttonNumber) => {
    return (
      <Button
        onClick={() => props.handleTabChange(buttonNumber)}
        color="primary"
        variant="contained"
        className="my-1 mx-1"
      >
        {text}
      </Button>
    );
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <Paper variant="outlined">
      <div className="d-flex justify-content-center">
        {renderButton(strings.accountSettingsPage.edit
          + " " + strings.accountSettingsPage.userData, props.tabsIdArray[0])}
        {renderButton(strings.accountSettingsPage.edit
          + " " + strings.accountSettingsPage.cars, props.tabsIdArray[1])}
        {renderButton(strings.accountSettingsPage.edit
          + " " + strings.accountSettingsPage.awards, props.tabsIdArray[2])}
      </div>
    </Paper>
  );
};

AccountTabPanel.propTypes = {
  handleTabChange: propTypes.func.isRequired,
  tabsIdArray: propTypes.array.isRequired,

};

export default AccountTabPanel;
