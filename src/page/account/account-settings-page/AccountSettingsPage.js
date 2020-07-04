import React from "react";
import AccountTabPanel from "../../../component/account/account-tab-panel/AccountTabPanel";
import EditUserData from "../../../component/account/edit-user-data/EditUserData";
import EditCars from "../../../component/account/edit-cars/EditCars";
import EditAwards from "../../../component/account/edit-awards/EditAwards";
import {PR} from "../../../logic/Helper";

export const AccountSettingsPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const tabsIdArray = ["tabUserData", "tabCars", "tabAwards"];
  const [tabIdNumber, setTabIdNumber] = React.useState(tabsIdArray[0]);

  const handleTabChange = (value = PR()) => {
    setTabIdNumber(value);
  };

  const renderChosenTab = () => {
    // eslint-disable-next-line default-case
    switch (tabIdNumber) {
      case tabsIdArray[0]: {
        return (
          <EditUserData/>
        );
      }
      case tabsIdArray[1]: {
        return (
          <EditCars/>
        );
      }
      case tabsIdArray[2]: {
        return (
          <EditAwards/>
        );
      }
    }
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className="mt-4 mx-2">
      <AccountTabPanel
        handleTabChange={handleTabChange}
        tabsIdArray={tabsIdArray}
        tabIdNumber={tabIdNumber}
      />

      {renderChosenTab()}
    </div>
  );
};

AccountSettingsPage.propTypes = {};

export default AccountSettingsPage;
