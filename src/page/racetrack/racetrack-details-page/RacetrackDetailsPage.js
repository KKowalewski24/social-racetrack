import React, {useContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {RacetrackDatabaseController} from "../../../logic/controller/model/RacetrackDatabaseController";
import FetchDataController from "../../../component/util/fetch-data-controller/FetchDataController";
import {PATH_RACETRACKS} from "../../../config/constant/path-constants";
import {AuthContext} from "../../../logic/AuthContextProvider";
import {errorNotification} from "../../../component/util/notification/notification";
import {BrowserStorageController} from "../../../logic/controller/BrowserStorageController";
import CustomCardImage from "../../../component/details/custom-card-image/CustomCardImage";
import HorizontalContainer from "../../../component/util/horizontal-container/HorizontalContainer";
import strings from "../../../config/constant/string-constants";
import {PR, redirectToPage} from "../../../logic/Helper";
import DetailsTable from "../../../component/details/details-table/DetailsTable";
import {CHOSEN_RACETRACK_ID} from "../../../config/constant/browser-storage-contants";
import Button from "@material-ui/core/Button";
import GlobalStyles from "../../../main/GlobalStyles";
import "../../../index.css";

export const RacetrackDetailsPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {isAdmin} = useContext(AuthContext);
  const [racetrack, setRacetrack] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const history = useHistory();
  const browserStorageController = new BrowserStorageController();
  const racetrackDatabaseController = new RacetrackDatabaseController();
  const globalStyles = GlobalStyles();

  useEffect(() => {
    racetrackDatabaseController.readSingleRacetrackById(
      browserStorageController.sessionStorageGetItem(CHOSEN_RACETRACK_ID),
      () => errorNotification(strings.racetrackDetailsPage.racetrackLoadingError)
    )
      .then((racetrack) => {
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
      racetrack.id, racetrack.imageUrl,
      () => errorNotification(strings.racetrackDetailsPage.deleteRacetrackError)
    ).then(() => redirectToPage(history, PATH_RACETRACKS));
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
          margin={"custom-hor-cont-margin-top-first"}
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
          margin={"custom-hor-cont-margin-bottom"}
          renderBody={renderBody}
        />
      );
    };

    const renderDescriptionBar = () => {
      return (
        <HorizontalContainer
          panelBackgroundColor={globalStyles.materialBlueBackground}
          margin={"custom-hor-cont-margin-bottom"}
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
          margin={"custom-hor-cont-margin-bottom-last"}
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
      errorMessageRedirectPath={PATH_RACETRACKS}
      errorMessageRedirectDescription={strings.racetrackDetailsPage.backRacetracksPage}
      errorMessageStyles={globalStyles.materialBlueFont}
    >
      {
        racetrack ?
          <div className="container-fluid">
            <div className="row justify-content-center">
              {renderLeftSide()}
              {renderRightSide()}
            </div>
          </div>
          : null
      }
    </FetchDataController>
  );
};

RacetrackDetailsPage.propTypes = {};

export default RacetrackDetailsPage;
