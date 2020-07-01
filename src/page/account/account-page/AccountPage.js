import React from "react";
import {Link} from "react-router-dom";
import {PATH_ACCOUNT_SETTINGS} from "../../../config/constant/path-constants";
import HorizontalContainer from "../../../component/horizontal-container/HorizontalContainer";
import LetterAvatar from "../../../component/avatar/LetterAvatar";
import {Member} from "../../../logic/model/person/Member";
import {Car} from "../../../logic/model/car/Car";
import {Award} from "../../../logic/model/award/Award";
import {CarType} from "../../../logic/model/car/CarType";
import {EngineType} from "../../../logic/model/car/EngineType";
import {DriveTrainType} from "../../../logic/model/car/DriveTrainType";
import DisplayUserData from "../../../component/display-user-data/DisplayUserData";
import config from "../../../config/config";
import GlobalStyles from "../../../main/GlobalStyles";
import SettingsIcon from "@material-ui/icons/Settings";
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

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <>
      <HorizontalContainer panelBackgroundColor={globalStyles.materialBlueBackground}>
        <div className="row justify-content-center">
          <div>
            <LetterAvatar
              fullname={"Kamil Kowalewski"}
              fontSize={110}
            />

            <Link to={PATH_ACCOUNT_SETTINGS}>
              <SettingsIcon
                fontSize="inherit"
                className={"custom-font-size-5 ml-5 " + globalStyles.greyFont100}
              />
            </Link>
          </div>
        </div>
      </HorizontalContainer>

      <DisplayUserData
        panelBackgroundColor={globalStyles.materialBlueBackground}
        firstName={member.firstName}
        lastName={member.lastName}
        country={member.country}
        city={member.city}
        age={member.age}
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
