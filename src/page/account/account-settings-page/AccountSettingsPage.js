import React from "react";
import AddCar from "../../../component/account/add-car/AddCar";
import AddAward from "../../../component/account/add-award/AddAward";
import AccountTabPanel from "../../../component/account/account-tab-panel/AccountTabPanel";
import {PR} from "../../../logic/Helper";

export const AccountSettingsPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const tabsIdArray = ["tabCars", "tabAwards"];
  const [tabIdNumber, setTabIdNumber] = React.useState(tabsIdArray[0]);

  const handleTabChange = (value = PR()) => {
    setTabIdNumber(value);
  };

  const renderChosenTab = () => {
    // eslint-disable-next-line default-case
    switch (tabIdNumber) {
      case tabsIdArray[0]: {
        return (
          <AddCar/>
        );
      }
      case tabsIdArray[1]: {
        return (
          <AddAward/>
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
