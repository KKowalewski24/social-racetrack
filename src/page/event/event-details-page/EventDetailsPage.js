import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../logic/AuthContextProvider";
import {useHistory} from "react-router-dom";
import FetchDataController from "../../../component/util/fetch-data-controller/FetchDataController";
import {BrowserStorageController} from "../../../logic/controller/BrowserStorageController";
import {EventDatabaseController} from "../../../logic/controller/model/EventDatabaseController";
import {MemberDatabaseController} from "../../../logic/controller/model/MemberDatabaseController";
import {errorNotification} from "../../../component/util/notification/notification";
import {PATH_DB_COLLECTION_EVENTS, PATH_DB_COLLECTION_MEMBERS} from "../../../config/constant/firebase-constants";
import CustomCardImage from "../../../component/util/custom-card-image/CustomCardImage";
import {PR, redirectToPage} from "../../../logic/Helper";
import RacetrackDetailsTable from "../../../component/details-display/racetrack-details-table/RacetrackDetailsTable";
import EventParticipantsTable from "../../../component/details-display/event-participants-table/EventParticipantsTable";
import config from "../../../config/config";
import {
  getAddedEventsRefPathArray,
  getDeletedEventsRefPathArray,
  isMemberParticipate
} from "../../../logic/model/person/Member";
import {
  getAddedMembersRefPathArray,
  getDeletedMembersRefPathArray,
  isFutureEvent,
  isMemberIsEventCreator
} from "../../../logic/model/event/Event";
import {PATH_FUTURE_EVENTS} from "../../../config/constant/path-constants";
import {CHOSEN_EVENT_ID} from "../../../config/constant/browser-storage-contants";
import TabPanelParticipationButtons
  from "../../../component/details-display/horizontal-participation-buttons/TabPanelParticipationButtons";
import HorizontalDeleteButton from "../../../component/details-display/horizontal-delete-button/HorizontalDeleteButton";
import HorizontalContainer from "../../../component/util/horizontal-container/HorizontalContainer";
import strings from "../../../config/constant/string-constants";
import GlobalStyles from "../../../main/GlobalStyles";
import "../../../index.css";

export const EventDetailsPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {isAdmin} = useContext(AuthContext);
  const [event, setEvent] = useState(undefined);
  const [member, setMember] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const history = useHistory();
  const browserStorageController = new BrowserStorageController();
  const memberDatabaseController = new MemberDatabaseController();
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

    memberDatabaseController.readSingleMemberById(
      config.auth().currentUser && config.auth().currentUser.uid,
      () => errorNotification(strings.eventDetailsPage.memberLoadingError)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteEvent = () => {
    eventDatabaseController.deleteEventById(
      event.id,
      () => errorNotification(strings.eventDetailsPage.deleteEventError)
    ).then(() => redirectToPage(history, PATH_FUTURE_EVENTS));
  };

  const handleParticipateEvent = () => {
    memberDatabaseController.updateMemberById(
      member.id,
      getAddedEventsRefPathArray(member, PATH_DB_COLLECTION_EVENTS + event.id),
      () => errorNotification(strings.eventDetailsPage.participateEventError)
    ).then(() => {
      eventDatabaseController.updateEventById(
        event.id,
        getAddedMembersRefPathArray(event, PATH_DB_COLLECTION_MEMBERS + member.id),
        () => errorNotification(strings.eventDetailsPage.participateEventError)
      ).then(() => {
        redirectToPage(history, PATH_FUTURE_EVENTS);
      });
    });
  };

  const handleCancelParticipateEvent = () => {
    memberDatabaseController.updateMemberById(
      member.id,
      getDeletedEventsRefPathArray(member, PATH_DB_COLLECTION_EVENTS + event.id),
      () => errorNotification(strings.eventDetailsPage.cancelParticipateEventError)
    ).then(() => {
      eventDatabaseController.updateEventById(
        event.id,
        getDeletedMembersRefPathArray(event, PATH_DB_COLLECTION_MEMBERS + member.id),
        () => errorNotification(strings.eventDetailsPage.cancelParticipateEventError)
      ).then(() => {
        redirectToPage(history, PATH_FUTURE_EVENTS);
      });
    });
  };

  const renderParticipationHandleButtons = () => {
    if (isFutureEvent(event.eventDate) && !isMemberIsEventCreator(event, member)) {
      return (
        <div className="custom-tab-panel-margin">
          <TabPanelParticipationButtons
            panelBackgroundColor={globalStyles.materialBlueBackground}
            handleParticipateEvent={handleParticipateEvent}
            participateEventButtonContent={strings.eventDetailsPage.participateEvent}
            handleCancelParticipateEvent={handleCancelParticipateEvent}
            cancelParticipateEventButtonContent={strings.eventDetailsPage.cancelParticipation}
            isAlreadyParticipate={isMemberParticipate(member, event)}
          />
        </div>
      );
    } else {
      return null;
    }
  };

  const renderLeftSide = () => {
    return (
      <div className="col-sm-6 align-self-center mb-4">
        <CustomCardImage
          imageUrl={event.racetrackData.imageUrl}
        />
      </div>
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

    const renderRacetrackTable = () => {
      return (
        <RacetrackDetailsTable
          racetrack={event.racetrackData}
          isShowRacetrackName={true}
        />
      );
    };

    const renderEventParticipants = () => {
      return (
        <EventParticipantsTable
          membersDataArray={event.membersDataArray}
        />
      );
    };

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
        {renderRacetrackTable()}
        {renderEventParticipants()}
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
        event && member ?
          <div className="container-fluid">
            {renderParticipationHandleButtons()}

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
