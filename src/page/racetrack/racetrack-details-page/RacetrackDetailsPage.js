import React, {useContext, useEffect, useState} from "react";
import {RacetrackDatabaseController} from "../../../logic/controller/model/RacetrackDatabaseController";
import FetchDataController from "../../../component/util/fetch-data-controller/FetchDataController";
import {PATH_HOME, PATH_RACETRACKS} from "../../../config/constant/path-constants";
import {AuthContext} from "../../../logic/AuthContextProvider";
import {errorNotification} from "../../../component/util/notification/notification";
import {BrowserStorageController} from "../../../logic/controller/BrowserStorageController";
import CustomCardImage from "../../../component/util/custom-card-image/CustomCardImage";
import HorizontalContainer from "../../../component/util/horizontal-container/HorizontalContainer";
import strings from "../../../config/constant/string-constants";
import {CHOSEN_RACETRACK_ID} from "../../../config/constant/browser-storage-contants";
import Button from "@material-ui/core/Button";
import GlobalStyles from "../../../main/GlobalStyles";
import "../../../index.css";

export const RacetrackDetailsPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {isAdmin} = useContext(AuthContext);
  const [racetrack, setRacetrack] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const browserStorageController = new BrowserStorageController();
  const racetrackDatabaseController = new RacetrackDatabaseController();
  const globalStyles = GlobalStyles();

  useEffect(() => {
    racetrackDatabaseController.readSingleRacetrackById(
      browserStorageController.sessionStorageGetItem(CHOSEN_RACETRACK_ID),
      () => errorNotification(strings.racetrackDetailsPage.racetrackLoadingError)
    )
      .then((racetrack) => {
        console.log(racetrack);
        setRacetrack(racetrack);
        setIsLoaded(true);
        setIsError(false);
      })
      .catch((err) => {
        setIsLoaded(true);
        setIsError(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderLeftSide = () => {
    return (
      <CustomCardImage
        imageUrl={racetrack.imageUrl}
      />
    );
  };

  const renderRightSide = () => {

    /**
     * text cannot be marked as PR() because getting racetrack object is async
     */
    const renderHeaderTitle = (text) => {
      return (
        <div className="row justify-content-center">
          <div className="col-md-12 text-center font-weight-bold custom-font-size-1-5">
            <b>{text}</b>
          </div>
        </div>
      );
    };

    const handleDeleteRacetrack = () => {
      racetrackDatabaseController.deleteRacetrackById(
        racetrack.id,
        () => errorNotification(strings.racetrackDetailsPage.deleteRacetrackError)
      );

      setTimeout(() => {
        window.location.replace(PATH_RACETRACKS);
      }, 1000);
    };

    const renderTitleBar = () => {
      return (
        <HorizontalContainer
          panelBackgroundColor={globalStyles.materialBlueBackground}
          margin={"mb-4"}
        >
          {renderHeaderTitle(racetrack && racetrack.name)}
        </HorizontalContainer>
      );
    };

    const renderDetailsBar = () => {
      return (
        <HorizontalContainer
          panelBackgroundColor={globalStyles.materialBlueBackground}
          margin={"mb-4"}
        >
          {/*todo*/}
        </HorizontalContainer>
      );
    };

    const renderDeleteBar = () => {
      return (
        <HorizontalContainer
          panelBackgroundColor={globalStyles.materialBlueBackground}
          margin={"mb-4"}
        >
          <div className="row justify-content-center">
            <Button
              onClick={handleDeleteRacetrack}
              color="secondary"
              variant="contained"
              size="medium"
            >
              {strings.racetrackDetailsPage.deleteRacetrack}
            </Button>
          </div>
        </HorizontalContainer>
      );
    };

    return (
      <div className="col-sm-6">
        {renderTitleBar()}
        {renderDetailsBar()}
        {isAdmin ? renderDeleteBar() : null}
      </div>
    );
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <FetchDataController
      isLoaded={isLoaded}
      isError={isError}
      errorMessageTitle={""}
      errorMessageDescription={strings.racetrackDetailsPage.racetrackLoadingError}
      errorMessageRedirectPath={PATH_HOME}
      errorMessageRedirectDescription={strings.racetrackDetailsPage.backHomePage}
      errorMessageStyles={globalStyles.materialBlueFont}
    >
      <div className="container-fluid custom-margin-top-2">
        <div className="row justify-content-center">
          {renderLeftSide()}
          {renderRightSide()}
        </div>
      </div>
    </FetchDataController>
  );
};

RacetrackDetailsPage.propTypes = {};

export default RacetrackDetailsPage;
