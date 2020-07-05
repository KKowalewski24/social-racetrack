import React from "react";
import AddCar from "../../../component/account/add-car/AddCar";
import AddAward from "../../../component/account/add-award/AddAward";
import AccountTabPanel from "../../../component/account/account-tab-panel/AccountTabPanel";
import {PR} from "../../../logic/Helper";
import {Car} from "../../../logic/model/car/Car";
import GlobalStyles from "../../../main/GlobalStyles";
import {Award} from "../../../logic/model/award/Award";

export const AccountSettingsPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const tabsIdArray = ["tabCars", "tabAwards"];
  const [tabIdNumber, setTabIdNumber] = React.useState(tabsIdArray[0]);
  const globalStyles = GlobalStyles();

  const handleTabChange = (value = PR()) => {
    setTabIdNumber(value);
  };

  const handleAddCar = (data = PR()) => {
    console.log(data)
    // const car = new Car();
    //  TODO ADD IMPL
  };

  const handleAddAward = (data = PR()) => {
    console.log(data)
    // const award = new Award();
    //  TODO ADD IMPL
  };

  const renderChosenTab = () => {
    // eslint-disable-next-line default-case
    switch (tabIdNumber) {
      case tabsIdArray[0]: {
        return (
          <AddCar
            handleAddCar={handleAddCar}
            margin="mt-3"
            backgroundColor={globalStyles.materialBlueBackground}
          />
        );
      }
      case tabsIdArray[1]: {
        return (
          <AddAward
            handleAddAward={handleAddAward}
            margin="mt-3"
            backgroundColor={globalStyles.materialBlueBackground}
          />
        );
      }
    }
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className="my-4 mx-2">
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
