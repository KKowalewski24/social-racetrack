import React from "react";
import {Member} from "../../../logic/model/person/Member";
import {Car} from "../../../logic/model/car/Car";
import {Award} from "../../../logic/model/award/Award";
import {CarType} from "../../../logic/model/car/CarType";
import {EngineType} from "../../../logic/model/car/EngineType";
import {DriveTrainType} from "../../../logic/model/car/DriveTrainType";
import DisplayUserData from "../../../component/account/display-user-data/DisplayUserData";
import DisplayUserAvatar from "../../../component/account/display-user-avatar/DisplayUserAvatar";
import config from "../../../config/config";
import HorizontalContainer from "../../../component/util/horizontal-container/HorizontalContainer";
import strings from "../../../config/constant/string-constants";
import Button from "@material-ui/core/Button";
import {AccountController} from "../../../logic/controller/AccountController";
import {errorNotification} from "../../../component/util/notification/notification";
import {PR} from "../../../logic/Helper";
import {PATH_ACCOUNT_SETTINGS} from "../../../config/constant/path-constants";
import GlobalStyles from "../../../main/GlobalStyles";
import "../../../index.css";

export const AccountPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const accountController = new AccountController();
  const globalStyles = GlobalStyles();

  const handleDeleteUser = () => {
    accountController.deleteAccount(() => {
      return errorNotification(strings.accountPage.deleteAccountError);
    });
  };

  const handleRemoveCar = (id = PR()) => {
    console.log("todo");
    //  TODO ADD IMPL !!!
  };

  const handleRemoveAward = (id = PR()) => {
    console.log("todo");
    //  TODO ADD IMPL !!!
  };

  //TODO REMOVE THIS
  const member = new Member(
    "Kamil", "Kowalewski", new Date("2020-07-04"),
    "Poland", "Lodz", "sample@gmail.com",
    [
      new Car("Audi", "RS3", 2019, 55000,
        CarType.RACE_CAR, EngineType.INLINE_FIVE, 400, DriveTrainType.AWD)
    ],
    [
      new Award("First place in SPA", 2018)
    ]
  );
  member.id = 1;
  member.carsArray[0].id = 1;
  member.receivedAwardsArray[0].id = 1;

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <>
      <DisplayUserAvatar
        firstName={member.firstName}
        lastName={member.lastName}
        avatarRedirectPath={PATH_ACCOUNT_SETTINGS}
        backgroundStyle={globalStyles.materialBlueBackground}
        addIconColor={globalStyles.greyFont100}
      />

      <DisplayUserData
        panelBackgroundColor={globalStyles.materialBlueBackground}
        firstName={member.firstName}
        lastName={member.lastName}
        country={member.country}
        city={member.city}
        birthDate={member.birthDate}
        email={member.email}
        joinDate={config.auth().currentUser?.metadata.creationTime}
        lastLogin={config.auth().currentUser?.metadata.lastSignInTime}
        carsArray={member.carsArray}
        receivedAwardsArray={member.receivedAwardsArray}
        handleRemoveCar={handleRemoveCar}
        handleRemoveAward={handleRemoveAward}
      />

      <HorizontalContainer
        panelBackgroundColor={globalStyles.materialBlueBackground}
        margin={"mt-3 mb-3"}
      >
        <div className="row justify-content-center">
          <Button
            onClick={handleDeleteUser}
            color="secondary"
            variant="contained"
            size="large"
          >
            {strings.accountPage.deleteAccount}
          </Button>
        </div>
      </HorizontalContainer>
    </>
  );
};

AccountPage.propTypes = {};

export default AccountPage;
