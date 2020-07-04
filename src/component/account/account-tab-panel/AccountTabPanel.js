import React from "react";
import propTypes from "prop-types";
import Button from "@material-ui/core/Button";
import strings from "../../../config/constant/string-constants";
import Paper from "@material-ui/core/Paper";
import {PR} from "../../../logic/Helper";

export const AccountTabPanel = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const renderButton = (text = PR(), buttonNumber = PR(), currentlySelected = PR()) => {
    return (
      <Button
        onClick={() => props.handleTabChange(buttonNumber)}
        color="primary"
        variant="contained"
        className="my-1 mx-1"
        disabled={buttonNumber === currentlySelected}
      >
        {text}
      </Button>
    );
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <Paper variant="outlined">
      <div className="d-flex justify-content-center">
        {
          renderButton(strings.accountSettingsPage.edit
            + " " + strings.accountSettingsPage.userData,
            props.tabsIdArray[0], props.tabIdNumber)
        }
        {
          renderButton(strings.accountSettingsPage.edit
            + " " + strings.accountSettingsPage.cars,
            props.tabsIdArray[1], props.tabIdNumber)
        }
        {
          renderButton(strings.accountSettingsPage.edit
            + " " + strings.accountSettingsPage.awards,
            props.tabsIdArray[2], props.tabIdNumber)
        }
      </div>
    </Paper>
  );
};

AccountTabPanel.propTypes = {
  handleTabChange: propTypes.func.isRequired,
  tabsIdArray: propTypes.array.isRequired,
  tabIdNumber: propTypes.string.isRequired,
};

export default AccountTabPanel;
