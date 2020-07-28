import React from "react";
import propTypes from "prop-types";
import strings from "../../../config/constant/string-constants";
import {PR} from "../../../logic/Helper";
import TabPanel from "../../util/tab-panel/TabPanel";
import Button from "@material-ui/core/Button";

export const AccountTabPanel = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const renderButton = (text = PR(),
                        buttonNumber = PR(), currentlySelected = PR()) => {
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
    props.tabsIdArray ?
      <TabPanel>
        {
          renderButton(strings.accountSettingsPage.add
            + " " + strings.accountSettingsPage.car,
            props.tabsIdArray[0], props.tabIdNumber)
        }
        {
          renderButton(strings.accountSettingsPage.add
            + " " + strings.accountSettingsPage.award,
            props.tabsIdArray[1], props.tabIdNumber)
        }
        {
          renderButton(strings.accountSettingsPage.editUser,
            props.tabsIdArray[2], props.tabIdNumber)
        }
      </TabPanel>
      : null
  );
};

AccountTabPanel.propTypes = {
  handleTabChange: propTypes.func.isRequired,
  tabsIdArray: propTypes.array.isRequired,
  tabIdNumber: propTypes.string.isRequired,
};

export default AccountTabPanel;
