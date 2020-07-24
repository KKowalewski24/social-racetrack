import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import propTypes from "prop-types";
import {EventDatabaseController} from "../../logic/controller/model/EventDatabaseController";
import {errorNotification} from "../util/notification/notification";
import strings from "../../config/constant/string-constants";
import TabPanel from "../util/tab-panel/TabPanel";
import {PATH_ACCOUNT, PATH_CREATE_EVENT, PATH_EVENT_DETAILS} from "../../config/constant/path-constants";
import {checkIfContains} from "../../logic/Helper";
import SearchBox from "../util/search-box/SearchBox";
import EventCard from "../card/event-card/EventCard";
import {getCardGridStyles} from "../card/CardHelper";
import FetchDataController from "../util/fetch-data-controller/FetchDataController";
import Button from "@material-ui/core/Button";
import GlobalStyles from "../../main/GlobalStyles";
import "../../index.css";

export const RenderEvents = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const [eventsArray, setEventsArray] = useState(undefined);
  const [filteredEventsArray, setFilteredEventsArray] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const eventDatabaseController = new EventDatabaseController();
  const globalStyles = GlobalStyles();

  useEffect(() => {
    eventDatabaseController.readAllEvents(
      () => errorNotification(strings.eventsPage.futureEventsPage.eventLoadingError)
    )
      .then((events) => {

        if (props.isFuture) {
          //TODO ADD FILTERING BELOW
          const futureEvents = events;
          setEventsArray(futureEvents);
          setFilteredEventsArray(futureEvents);
        } else {
          //TODO ADD FILTERING BELOW
          const pastEvents = events;
          setEventsArray(pastEvents);
          setFilteredEventsArray(pastEvents);
        }

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
        <Link to={PATH_CREATE_EVENT} className="custom-color-inherit">
          <Button
            color="primary"
            variant="contained"
            className="my-1 mx-1"
          >
            {strings.eventsPage.futureEventsPage.createNewEvent}
          </Button>
        </Link>
      </TabPanel>
    );
  };

  const renderSearchBox = () => {

    const handleSearch = (event) => {
      const query = event.target.value.toLowerCase();

      const resultArray = [];
      eventsArray && eventsArray.forEach((it) => {
        if (checkIfContains(it.name, query)
          || checkIfContains(it.racetrackData.name, query)
          || checkIfContains(it.racetrackData.country, query)
          || checkIfContains(it.racetrackData.city, query)) {
          resultArray.push(it);
        }
      });

      setFilteredEventsArray(resultArray);
    };

    return (
      <SearchBox
        label={strings.eventsPage.futureEventsPage.searchEvent}
        handleChange={handleSearch}
      />
    );
  };

  const renderEventCards = () => {

    const cardPropertiesKeysArray = [
      strings.eventsPage.futureEventsPage.cardPropertiesKeysRacetrack,
      strings.eventsPage.futureEventsPage.cardPropertiesKeysCountry,
      strings.eventsPage.futureEventsPage.cardPropertiesKeysCity
    ];

    return filteredEventsArray
      && filteredEventsArray.map((it, index) => {
        return (
          <EventCard
            key={index}
            gridStyles={getCardGridStyles()}
            redirectPath={PATH_EVENT_DETAILS}
            titleStyles={globalStyles.materialBlueFont}
            eventObject={it}
            eventPropertiesKeysArray={cardPropertiesKeysArray}
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
      errorMessageDescription={strings.eventsPage.futureEventsPage.eventLoadingError}
      errorMessageRedirectPath={PATH_ACCOUNT}
      errorMessageRedirectDescription={strings.eventsPage.futureEventsPage.backAccountPage}
      errorMessageStyles={globalStyles.materialBlueFont}
    >
      <div className="container-fluid">
        <div className="custom-tab-panel-margin">
          {props.isFuture ? renderTab() : null}

          <div className="container custom-container-sm">
            <div className="row custom-search-box-margin">
              {renderSearchBox()}
            </div>
          </div>

          <div className="row justify-content-center custom-render-card-margin">
            {renderEventCards()}
          </div>
        </div>
      </div>
    </FetchDataController>
  );
};

/**
 * If isFuture is set to true then component shows future event otherwise it shows past events
 */
RenderEvents.propTypes = {
  isFuture: propTypes.bool.isRequired,
};

export default RenderEvents;
