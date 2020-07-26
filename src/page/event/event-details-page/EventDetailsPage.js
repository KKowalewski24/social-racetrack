import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../logic/AuthContextProvider";
import {useHistory} from "react-router-dom";
import FetchDataController from "../../../component/util/fetch-data-controller/FetchDataController";
import {BrowserStorageController} from "../../../logic/controller/BrowserStorageController";
import {EventDatabaseController} from "../../../logic/controller/model/EventDatabaseController";
import {errorNotification} from "../../../component/util/notification/notification";
import CustomCardImage from "../../../component/details-display/custom-card-image/CustomCardImage";
import {PR, redirectToPage} from "../../../logic/Helper";
import {PATH_FUTURE_EVENTS} from "../../../config/constant/path-constants";
import {CHOSEN_EVENT_ID} from "../../../config/constant/browser-storage-contants";
import HorizontalDeleteButton from "../../../component/details-display/horizontal-delete-button/HorizontalDeleteButton";
import HorizontalContainer from "../../../component/util/horizontal-container/HorizontalContainer";
import strings from "../../../config/constant/string-constants";
import GlobalStyles from "../../../main/GlobalStyles";
import "../../../index.css";

export const EventDetailsPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {isAdmin} = useContext(AuthContext);
  const [event, setEvent] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const history = useHistory();
  const browserStorageController = new BrowserStorageController();
  const eventDatabaseController = new EventDatabaseController();
  const globalStyles = GlobalStyles();

  useEffect(() => {
    eventDatabaseController.readSingleEventByID(
      browserStorageController.sessionStorageGetItem(CHOSEN_EVENT_ID),
      () => errorNotification(strings.eventDetailsPage.eventLoadingError)
    )
      .then((event) => {
        setEvent(event);
        setIsLoaded(true);
        setIsError(false);
      })
      .catch((err) => {
        setIsLoaded(true);
        setIsError(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteEvent = () => {
    eventDatabaseController.deleteEvent(
      event.id,
      () => errorNotification(strings.eventDetailsPage.deleteEventError)
    ).then(() => redirectToPage(history, PATH_FUTURE_EVENTS));
  };

  const handleParticipateEvent = () => {

  };

  const handleCancelParticipateEvent = () => {

  };

  const renderLeftSide = () => {
    return (
      <CustomCardImage
        imageUrl={event.racetrackData.imageUrl}
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
          {renderHeaderTitle(event.name)}
        </HorizontalContainer>
      );
    };
    //TODO
    const renderDeleteBar = () => {
      return (
        <HorizontalDeleteButton
          panelBackgroundColor={globalStyles.materialBlueBackground}
          handleDelete={handleDeleteEvent}
          buttonTextContent={strings.eventDetailsPage.deleteEvent}
        />
      );
    };

    return (
      <div className="col-sm-6">
        {renderTitleBar()}

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
      errorMessageDescription={strings.eventDetailsPage.eventLoadingError}
      errorMessageRedirectPath={PATH_FUTURE_EVENTS}
      errorMessageRedirectDescription={strings.eventDetailsPage.backEventsPage}
      errorMessageStyles={globalStyles.materialBlueFont}
    >
      {
        event ?
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

EventDetailsPage.propTypes = {};

export default EventDetailsPage;
