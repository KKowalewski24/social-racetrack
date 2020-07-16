import React, {useContext, useEffect, useState} from "react";
import {RacetrackDatabaseController} from "../../../logic/controller/model/RacetrackDatabaseController";
import FetchDataController from "../../../component/util/fetch-data-controller/FetchDataController";
import {PATH_HOME} from "../../../config/constant/path-constants";
import {AuthContext} from "../../../logic/AuthContextProvider";
import {errorNotification} from "../../../component/util/notification/notification";
import {BrowserStorageController} from "../../../logic/controller/BrowserStorageController";
import strings from "../../../config/constant/string-constants";
import {CHOSEN_RACETRACK_ID} from "../../../config/constant/browser-storage-contants";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import GlobalStyles from "../../../main/GlobalStyles";
import HorizontalContainer from "../../../component/util/horizontal-container/HorizontalContainer";
import {PR} from "../../../logic/Helper";
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
      <div className="col-sm-6 align-self-center mb-4">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-8">
              <Card variant="outlined">
                <CardMedia
                  component="img"
                  src={racetrack.imageUrl}
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderRightSide = () => {

    const renderHeaderTitle = (text = PR()) => {
      return (
        <div className="row justify-content-center mb-3">
          <div className="col-md-12 text-center font-weight-bold custom-font-size-1-5">
            <b>{text}</b>
          </div>
        </div>
      );
    };

    return (
      <div className="col-sm-6">
        <HorizontalContainer
          panelBackgroundColor={globalStyles.materialBlueBackground}
          margin={"m-0"}
        >

        </HorizontalContainer>
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
