import React, {useEffect, useState} from "react";
import {MemberDatabaseController} from "../../../logic/controller/model/MemberDatabaseController";
import {BrowserStorageController} from "../../../logic/controller/BrowserStorageController";
import strings from "../../../config/constant/string-constants";
import {PATH_HOME} from "../../../config/constant/path-constants";
import FetchDataController from "../../../component/util/fetch-data-controller/FetchDataController";
import {CHOSEN_MEMBER_ID} from "../../../config/constant/browser-storage-contants";
import {errorNotification} from "../../../component/util/notification/notification";
import DisplayUserData from "../../../component/account/display-user-data/DisplayUserData";
import GlobalStyles from "../../../main/GlobalStyles";
import "../../../index.css";

export const MemberDetailsPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const [member, setMember] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const browserStorageController = new BrowserStorageController();
  const memberDatabaseController = new MemberDatabaseController();
  const globalStyles = GlobalStyles();

  useEffect(() => {
    memberDatabaseController.readMemberById(
      browserStorageController.sessionStorageGetItem(CHOSEN_MEMBER_ID),
      () => errorNotification(strings.memberDetailsPage.memberLoadingError)
    )
      .then((member) => {
        console.log(member);
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

  /*------------------------ RETURN REGION ------------------------*/
  return (
    //todo
    member ?
      <FetchDataController
        isLoaded={isLoaded}
        isError={isError}
        errorMessageTitle={""}
        errorMessageDescription={strings.memberDetailsPage.memberLoadingError}
        errorMessageRedirectPath={PATH_HOME}
        errorMessageRedirectDescription={strings.memberDetailsPage.backHomePage}
        errorMessageStyles={globalStyles.materialBlueFont}
      >
        <div className="container-fluid">
          <DisplayUserData
            panelBackgroundColor={globalStyles.materialBlueBackground}
            margin={"custom-hor-cont-margin-bottom"}
            firstName={member.firstName}
            lastName={member.lastName}
            country={member.country}
            city={member.city}
            birthDate={member.birthDate}
            email={member.email}
            carsArray={member.carsArray}
            receivedAwardsArray={member.receivedAwardsArray}
            isEditableForUser={false}
          />

        </div>
      </FetchDataController>
      : null
  );
};

MemberDetailsPage.propTypes = {};

export default MemberDetailsPage;
