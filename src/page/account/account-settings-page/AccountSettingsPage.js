import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import AddCar from "../../../component/account/add-car/AddCar";
import AddAward from "../../../component/account/add-award/AddAward";
import AccountTabPanel from "../../../component/account/account-tab-panel/AccountTabPanel";
import {generateCustomUuid, PR, redirectToPage} from "../../../logic/Helper";
import config from "../../../config/config";
import {errorNotification} from "../../../component/util/notification/notification";
import {PATH_ACCOUNT} from "../../../config/constant/path-constants";
import strings from "../../../config/constant/string-constants";
import EditUserData from "../../../component/account/edit-user-data/EditUserData";
import {ToastContainer} from "react-toastify";
import {MemberDatabaseController} from "../../../logic/controller/model/MemberDatabaseController";
import {Award} from "../../../logic/model/award/Award";
import {Car} from "../../../logic/model/car/Car";
import {getAddedCarsArray, getAddedReceivedAwardsArray} from "../../../logic/model/person/Member";
import {getUpdatedFieldsArray} from "../../../logic/model/person/PersonAbst";
import GlobalStyles from "../../../main/GlobalStyles";

export const AccountSettingsPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const tabsIdArray = ["tabUser", "tabCars", "tabAwards"];
  const [tabIdNumber, setTabIdNumber] = useState(tabsIdArray[0]);
  const [member, setMember] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const history = useHistory();
  const memberDatabaseController = new MemberDatabaseController();
  const globalStyles = GlobalStyles();

  useEffect(() => {
    memberDatabaseController.readSingleMemberById(
      config.auth().currentUser && config.auth().currentUser.uid,
      () => errorNotification(strings.accountSettingsPage.accountLoadingError)
    )
      .then((member) => {
        setMember(member);
        setIsLoaded(true);
        setIsError(false);
      })
      .catch((err) => {
        setIsLoaded(true);
        setIsError(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTabChange = (value = PR()) => {
    setTabIdNumber(value);
  };

  const handleAddCar = (data = PR()) => {
    if (checkIfReadyToSave()) {
      const car = new Car(
        generateCustomUuid(), data.brand, data.model, data.productionYear,
        data.mileageInKilometers, data.carType, data.engineType,
        data.enginePowerInHorsepower, data.driveTrainType
      );

      memberDatabaseController.updateMemberById(
        member.id,
        getAddedCarsArray(member, car),
        () => errorNotification(strings.accountSettingsPage.itemNotAdded)
      ).then(() => redirectToPage(history, PATH_ACCOUNT));
    }
  };

  const handleAddAward = (data = PR()) => {
    if (checkIfReadyToSave()) {
      const award = new Award(generateCustomUuid(), data.description, data.year);

      memberDatabaseController.updateMemberById(
        member.id,
        getAddedReceivedAwardsArray(member, award),
        () => errorNotification(strings.accountSettingsPage.itemNotAdded)
      ).then(() => redirectToPage(history, PATH_ACCOUNT));
    }
  };

  const handleEditUser = (data = PR()) => {
    if (checkIfReadyToSave()) {
      memberDatabaseController.updateMemberById(
        member.id,
        getUpdatedFieldsArray(data.firstName, data.lastName, data.country, data.city),
        () => errorNotification(strings.accountSettingsPage.userDataNotUpdated)
      ).then(() => redirectToPage(history, PATH_ACCOUNT));
    }
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
      case tabsIdArray[2]: {
        if (member) {
          return (
            <EditUserData
              handleEditUser={handleEditUser}
              previousFirstName={member.firstName}
              previousLastName={member.lastName}
              previousCountry={member.country}
              previousCity={member.city}
              margin="mt-3"
              backgroundColor={globalStyles.materialBlueBackground}
            />
          );
        } else {
          errorNotification(strings.accountSettingsPage.accountLoadingError);
        }
      }
    }
  };

  const checkIfReadyToSave = () => {
    return isLoaded && !isError;
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className="container-fluid">
      <div className="custom-tab-panel-margin">
        <AccountTabPanel
          handleTabChange={handleTabChange}
          tabsIdArray={tabsIdArray}
          tabIdNumber={tabIdNumber}
        />

        {renderChosenTab()}
      </div>

      <ToastContainer/>
    </div>
  );
};

AccountSettingsPage.propTypes = {};

export default AccountSettingsPage;
