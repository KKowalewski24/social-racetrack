import React, {useEffect, useState} from "react";
import DisplayUserData from "../../../component/account/display-user-data/DisplayUserData";
import DisplayUserAvatar from "../../../component/account/display-user-avatar/DisplayUserAvatar";
import config from "../../../config/config";
import HorizontalContainer from "../../../component/util/horizontal-container/HorizontalContainer";
import strings from "../../../config/constant/string-constants";
import FetchDataController from "../../../component/util/fetch-data-controller/FetchDataController";
import {AccountController} from "../../../logic/controller/AccountController";
import {errorNotification} from "../../../component/util/notification/notification";
import {MemberDatabaseController} from "../../../logic/controller/model/MemberDatabaseController";
import {PR} from "../../../logic/Helper";
import {PATH_ACCOUNT_SETTINGS, PATH_HOME} from "../../../config/constant/path-constants";
import {getDeletedCarsArray, getDeletedReceivedAwardsArray} from "../../../logic/model/person/Member";
import Button from "@material-ui/core/Button";
import GlobalStyles from "../../../main/GlobalStyles";
import "../../../index.css";

export const AccountPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const [member, setMember] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [shouldUpdate, setShouldUpdate] = useState(false);

  const memberDatabaseController = new MemberDatabaseController();
  const accountController = new AccountController();
  const globalStyles = GlobalStyles();

  useEffect(() => {
    memberDatabaseController.readSingleMemberById(
      config.auth().currentUser.uid,
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
      memberDatabaseController.updateMember(
        member.id,
        getDeletedCarsArray(member, id),
        () => errorNotification(strings.accountSettingsPage.userDataNotUpdated)
      ).then(() => setShouldUpdate(true));
    }
  };

  const handleRemoveAward = (id = PR()) => {
    if (checkIfReadyToSave()) {
      memberDatabaseController.updateMember(
        member.id,
        getDeletedReceivedAwardsArray(member, id),
        () => errorNotification(strings.accountSettingsPage.userDataNotUpdated)
      ).then(() => setShouldUpdate(true));
    }
  };

  const checkIfReadyToSave = () => {
    return isLoaded && !isError;
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    member ?
      <FetchDataController
        isLoaded={isLoaded}
        isError={isError}
        errorMessageTitle={""}
        errorMessageDescription={strings.accountPage.accountLoadingError}
        errorMessageRedirectPath={PATH_HOME}
        errorMessageRedirectDescription={strings.accountPage.backHomePage}
        errorMessageStyles={globalStyles.materialBlueFont}
      >
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
            isEditableForUser={true}
            joinDate={config.auth().currentUser?.metadata.creationTime}
            lastLogin={config.auth().currentUser?.metadata.lastSignInTime}
            handleRemoveCar={handleRemoveCar}
            handleRemoveAward={handleRemoveAward}
          />

          <HorizontalContainer
            panelBackgroundColor={globalStyles.materialBlueBackground}
            margin={"custom-hor-cont-margin-bottom-last"}
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
        </div>
      </FetchDataController>
      : null
  );
};

AccountPage.propTypes = {};

export default AccountPage;
