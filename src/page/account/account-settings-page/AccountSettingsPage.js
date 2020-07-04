import React from "react";
import AccountTabPanel from "../../../component/account-tab-panel/AccountTabPanel";

export const AccountSettingsPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const tabsIdArray = ["tabOne", "tabTwo", "tabThree"];
  const [tabNumber, setTabNumber] = React.useState(tabsIdArray[0]);

  const handleTabChange = (value) => {
    setTabNumber(value);
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className="mt-4">
      <AccountTabPanel
        handleTabChange={handleTabChange}
        tabsIdArray={tabsIdArray}
      />

    </div>
  );
};

AccountSettingsPage.propTypes = {};

export default AccountSettingsPage;
