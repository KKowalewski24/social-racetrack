import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../logic/AuthContextProvider";
import DisplayUserData from "../../../component/account/display-user-data/DisplayUserData";
import DisplayUserAvatar from "../../../component/account/display-user-avatar/DisplayUserAvatar";
import config from "../../../config/config";
import strings from "../../../config/constant/string-constants";
import FetchDataController from "../../../component/util/fetch-data-controller/FetchDataController";
import {AccountController} from "../../../logic/controller/AccountController";
import {errorNotification} from "../../../component/util/notification/notification";
import RenderEventCards from "../../../component/events-display/render-event-cards/RenderEventCards";
import {MemberDatabaseController} from "../../../logic/controller/model/MemberDatabaseController";
import HorizontalDeleteButton from "../../../component/details-display/horizontal-delete-button/HorizontalDeleteButton";
import {PR} from "../../../logic/Helper";
import {PATH_ACCOUNT_SETTINGS, PATH_HOME} from "../../../config/constant/path-constants";
import {getDeletedCarsArray, getDeletedReceivedAwardsArray} from "../../../logic/model/person/Member";
import GlobalStyles from "../../../main/GlobalStyles";
import "../../../index.css";

export const AccountPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {isAdmin} = useContext(AuthContext);
  const [member, setMember] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [shouldUpdate, setShouldUpdate] = useState(false);

  const memberDatabaseController = new MemberDatabaseController();
  const accountController = new AccountController();
  const globalStyles = GlobalStyles();

  useEffect(() => {
    memberDatabaseController.readSingleMemberById(
      config.auth().currentUser && config.auth().currentUser.uid,
      () => errorNotification(strings.accountPage.accountLoadingError)
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

    setShouldUpdate(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldUpdate]);

  const handleDeleteUser = () => {
    accountController.deleteAccount(() => {
      return errorNotification(strings.accountPage.deleteAccountError);
    });
  };

  const handleRemoveCar = (id = PR()) => {
    if (checkIfReadyToSave()) {
      memberDatabaseController.updateMemberById(
        member.id,
        getDeletedCarsArray(member, id),
        () => errorNotification(strings.accountSettingsPage.itemNotDeleted)
      ).then(() => setShouldUpdate(true));
    }
  };

  const handleRemoveAward = (id = PR()) => {
    if (checkIfReadyToSave()) {
      memberDatabaseController.updateMemberById(
        member.id,
        getDeletedReceivedAwardsArray(member, id),
        () => errorNotification(strings.accountSettingsPage.itemNotDeleted)
      ).then(() => setShouldUpdate(true));
    }
  };

  const checkIfReadyToSave = () => {
    return isLoaded && !isError;
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <FetchDataController
      isLoaded={isLoaded}
      isError={isError}
      errorMessageTitle={""}
      errorMessageDescription={strings.accountPage.accountLoadingError}
      errorMessageRedirectPath={PATH_HOME}
      errorMessageRedirectDescription={strings.accountPage.backHomePage}
      errorMessageStyles={globalStyles.materialBlueFont}
    >
      {
        member ?
          <div className="container-fluid">
            <DisplayUserAvatar
              margin={"custom-hor-cont-margin-top-first"}
              firstName={member.firstName}
              lastName={member.lastName}
              avatarRedirectPath={PATH_ACCOUNT_SETTINGS}
              backgroundStyle={globalStyles.materialBlueBackground}
              addIconColor={globalStyles.greyFont100}
            />

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
              isAdmin={isAdmin}
              isEditableForUser={true}
              joinDate={config.auth().currentUser?.metadata.creationTime}
              lastLogin={config.auth().currentUser?.metadata.lastSignInTime}
              handleRemoveCar={handleRemoveCar}
              handleRemoveAward={handleRemoveAward}
            />

            {
              member.eventsDataArray && member.eventsDataArray.length !== 0 ?
                <div className="row justify-content-center custom-render-card-margin">
                  <RenderEventCards
                    filteredEventsArray={member.eventsDataArray}
                    titleStyles={globalStyles.materialBlueFont}
                  />
                </div>
                : null
            }

            <HorizontalDeleteButton
              panelBackgroundColor={globalStyles.materialBlueBackground}
              handleDelete={handleDeleteUser}
              buttonTextContent={strings.accountPage.deleteAccount}
            />
          </div>
          : null
      }
    </FetchDataController>
  );
};

AccountPage.propTypes = {};

export default AccountPage;
