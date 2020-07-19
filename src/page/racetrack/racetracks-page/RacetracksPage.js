import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import TabPanel from "../../../component/util/tab-panel/TabPanel";
import {RacetrackDatabaseController} from "../../../logic/controller/model/RacetrackDatabaseController";
import {PATH_CREATE_RACETRACK, PATH_HOME, PATH_RACETRACK_DETAILS} from "../../../config/constant/path-constants";
import FetchDataController from "../../../component/util/fetch-data-controller/FetchDataController";
import strings from "../../../config/constant/string-constants";
import {AuthContext} from "../../../logic/AuthContextProvider";
import {checkIfContains} from "../../../logic/Helper";
import SearchBox from "../../../component/util/search-box/SearchBox";
import {errorNotification} from "../../../component/util/notification/notification";
import RacetrackCard from "../../../component/card/racetrack-card/RacetrackCard";
import Button from "@material-ui/core/Button";
import GlobalStyles from "../../../main/GlobalStyles";
import "../../../index.css";

export const RacetracksPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {isAdmin} = useContext(AuthContext);
  const [racetracksArray, setRacetracksArray] = useState(undefined);
  const [filteredRacetracksArray, setFilteredRacetracksArray] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const racetrackDatabaseController = new RacetrackDatabaseController();
  const globalStyles = GlobalStyles();

  useEffect(() => {
    racetrackDatabaseController.readAllRacetracks(
      () => errorNotification(strings.racetracksPage.racetrackLoadingError)
    )
      .then((racetracks) => {
        setRacetracksArray(racetracks);
        setFilteredRacetracksArray(racetracks);
        setIsLoaded(true);
        setIsError(false);
      })
      .catch((err) => {
        setIsLoaded(true);
        setIsError(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderTab = () => {
    return (
      <TabPanel>
        <Link to={PATH_CREATE_RACETRACK} className="custom-color-inherit">
          <Button
            color="primary"
            variant="contained"
            className="my-1 mx-1"
          >
            {strings.racetracksPage.addNewRacetrack}
          </Button>
        </Link>
      </TabPanel>
    );
  };

  const renderSearchBox = () => {

    const handleSearch = (event) => {
      const query = event.target.value.toLowerCase();

      const resultArray = [];
      racetracksArray && racetracksArray.forEach((it) => {
        if (checkIfContains(it.name, query)
          || checkIfContains(it.country, query)
          || checkIfContains(it.city, query)) {
          resultArray.push(it);
        }
      });

      setFilteredRacetracksArray(resultArray);
    };

    return (
      <SearchBox
        label={strings.racetracksPage.searchRacetrack}
        handleChange={handleSearch}
      />
    );
  };

  const renderRacetrackCards = () => {

    const cardPropertiesKeysArray = [
      strings.racetracksPage.cardPropertiesKeysCountry,
      strings.racetracksPage.cardPropertiesKeysCity,
      strings.racetracksPage.cardPropertiesKeysLengthInMeters
    ];

    return filteredRacetracksArray
      && filteredRacetracksArray.map((it, index) => {
        return (
          <RacetrackCard
            key={index}
            gridStyles={"col-sm-5 col-md-4 col-lg-3 col-xl-2 m-3 p-0"}
            redirectPath={PATH_RACETRACK_DETAILS}
            titleStyles={globalStyles.materialBlueFont}
            racetrackObject={it}
            racetrackPropertiesKeysArray={cardPropertiesKeysArray}
          />
        );
      });
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <FetchDataController
      isLoaded={isLoaded}
      isError={isError}
      errorMessageTitle={""}
      errorMessageDescription={strings.racetracksPage.racetrackLoadingError}
      errorMessageRedirectPath={PATH_HOME}
      errorMessageRedirectDescription={strings.racetracksPage.backHomePage}
      errorMessageStyles={globalStyles.materialBlueFont}
    >
      <div className="container-fluid">
        <div className="custom-tab-panel-margin">
          {isAdmin ? renderTab() : null}

          <div className="container custom-container-sm">
            <div className="row custom-search-box-margin">
              {renderSearchBox()}
            </div>
          </div>

          <div className="row justify-content-center custom-render-card-margin">
            {renderRacetrackCards()}
          </div>
        </div>
      </div>
    </FetchDataController>
  );
};

RacetracksPage.propTypes = {};

export default RacetracksPage;
