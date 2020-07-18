import React, {useContext, useEffect, useState} from "react";
import {RacetrackDatabaseController} from "../../../logic/controller/model/RacetrackDatabaseController";
import FetchDataController from "../../../component/util/fetch-data-controller/FetchDataController";
import {PATH_HOME, PATH_RACETRACKS} from "../../../config/constant/path-constants";
import {AuthContext} from "../../../logic/AuthContextProvider";
import {errorNotification} from "../../../component/util/notification/notification";
import {BrowserStorageController} from "../../../logic/controller/BrowserStorageController";
import CustomCardImage from "../../../component/details/custom-card-image/CustomCardImage";
import HorizontalContainer from "../../../component/util/horizontal-container/HorizontalContainer";
import strings from "../../../config/constant/string-constants";
import {PR} from "../../../logic/Helper";
import {CHOSEN_RACETRACK_ID} from "../../../config/constant/browser-storage-contants";
import Button from "@material-ui/core/Button";
import GlobalStyles from "../../../main/GlobalStyles";
import "../../../index.css";
import DetailsTable from "../../../component/details/details-table/DetailsTable";

export const RacetrackDetailsPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {isAdmin} = useContext(AuthContext);
  const [racetrack, setRacetrack] = useState(undefined);
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

  const handleDeleteRacetrack = () => {
    racetrackDatabaseController.deleteRacetrackById(
      racetrack.id,
      () => errorNotification(strings.racetrackDetailsPage.deleteRacetrackError)
    );

    setTimeout(() => {
      window.location.replace(PATH_RACETRACKS);
    }, 1000);
  };

  const renderLeftSide = () => {
    return (
      <CustomCardImage
        imageUrl={racetrack.imageUrl}
      />
    );
  };

  const renderRightSide = () => {

    const renderBoldText = (text = PR()) => {
      return (
        <div className="font-weight-bold mb-1">
          {text}
        </div>
      );
    };

    /**
     * text cannot be marked as PR() because getting racetrack object is async
     */
    const renderHeaderTitle = (text = PR()) => {
      return (
        <div className="row justify-content-center">
          <div className="col-md-12 text-center font-weight-bold custom-font-size-1-5 custom-prevent-overflow">
            <span>{text}</span>
          </div>
        </div>
      );
    };

    const renderTitleBar = () => {
      return (
        <HorizontalContainer
          panelBackgroundColor={globalStyles.materialBlueBackground}
          margin={"mb-3"}
        >
          {renderHeaderTitle(racetrack.name)}
        </HorizontalContainer>
      );
    };

    const renderDetailsBar = () => {

      const renderBody = () => {
        return (
          <tbody>
            <tr>
              <th>{strings.racetrackDetailsPage.country}</th>
              <td>{racetrack.country}</td>
            </tr>
            <tr>
              <th>{strings.racetrackDetailsPage.city}</th>
              <td>{racetrack.city}</td>
            </tr>
            <tr>
              <th>{strings.racetrackDetailsPage.lengthInMeters}</th>
              <td>{racetrack.lengthInMeters}</td>
            </tr>
            <tr>
              <th>{strings.racetrackDetailsPage.turnsNumber}</th>
              <td>{racetrack.turnsNumber}</td>
            </tr>
            <tr>
              <th>{strings.racetrackDetailsPage.maximumExhaustLoudnessInDecibels}</th>
              <td>{racetrack.maximumExhaustLoudnessInDecibels}</td>
            </tr>
            <tr>
              <th>{strings.racetrackDetailsPage.minimumRideHeightInMillimeters}</th>
              <td>{racetrack.minimumRideHeightInMillimeters}</td>
            </tr>
          </tbody>
        );
      };

      return (
        <DetailsTable
          panelBackgroundColor={globalStyles.materialBlueBackground}
          margin={"mb-3"}
          renderBody={renderBody}
        />
      );
    };

    const renderDescriptionBar = () => {
      return (
        <HorizontalContainer
          panelBackgroundColor={globalStyles.materialBlueBackground}
          margin={"mb-3"}
        >
          {renderHeaderTitle(strings.racetrackDetailsPage.description)}
          <div className="text-center">
            {renderBoldText(racetrack.description)}
          </div>
        </HorizontalContainer>
      );
    };

    const renderDeleteBar = () => {
      return (
        <HorizontalContainer
          panelBackgroundColor={globalStyles.materialBlueBackground}
          margin={"mb-3"}
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
        {renderDescriptionBar()}
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
      <div className="container-fluid mt-4">
        <div className="row justify-content-center">
          {racetrack ? renderLeftSide() : null}
          {racetrack ? renderRightSide() : null}
        </div>
      </div>
    </FetchDataController>
  );
};

RacetrackDetailsPage.propTypes = {};

export default RacetrackDetailsPage;
