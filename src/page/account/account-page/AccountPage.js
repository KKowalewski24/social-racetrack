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
import GlobalStyles from "../../../main/GlobalStyles";
import "../../../index.css";

export const AccountPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const globalStyles = GlobalStyles();

  //TODO REMOVE THIS
  const member = new Member(
    "Kamil", "Kowalewski", 22, "Poland", "Lodz",
    [new Car("Audi", "RS3", 2019, CarType.RACE_CAR,
      55000, EngineType.INLINE_FIVE, 400, DriveTrainType.AWD)],
    [new Award("First place in SPA", 2018)]
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
        backgroundStyle={globalStyles.materialBlueBackground}
        AddIconColor={globalStyles.greyFont100}
      />

      <DisplayUserData
        panelBackgroundColor={globalStyles.materialBlueBackground}
        firstName={member.firstName}
        lastName={member.lastName}
        country={member.country}
        city={member.city}
        age={member.age}
        email={config.auth().currentUser.email}
        joinDate={config.auth().currentUser?.metadata.creationTime}
        lastLogin={config.auth().currentUser?.metadata.lastSignInTime}
        carsArray={member.carsArray}
        receivedAwardsArray={member.receivedAwardsArray}
      />
    </>
  );
};

AccountPage.propTypes = {};

export default AccountPage;
