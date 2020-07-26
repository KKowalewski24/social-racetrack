import {DatabaseController} from "../DatabaseController";
import {generateCustomUuid, getTomorrow, PR} from "../../Helper";
import {Event} from "../../model/event/Event";
import {MemberDatabaseController} from "./MemberDatabaseController";
import {getAddedEventsRefPathArray} from "../../model/person/Member";
import config from "../../../config/config";
import {
  PATH_DB_COLLECTION_EVENTS,
  PATH_DB_COLLECTION_MEMBERS,
  PATH_DB_COLLECTION_RACETRACKS
} from "../../../config/constant/firebase-constants";

export class EventDatabaseController {

  /*------------------------ FIELDS REGION ------------------------*/
  _databaseController = new DatabaseController();
  _memberDatabaseController = new MemberDatabaseController();

  /*------------------------ METHODS REGION ------------------------*/
  createEvent = async (eventName = PR(), racetrackId = PR(),
                       creatorId = PR(), eventDate = PR(),
                       errorFunction = PR()) => {
    try {
      const event = new Event(
        generateCustomUuid(), eventName,
        PATH_DB_COLLECTION_RACETRACKS + racetrackId,
        PATH_DB_COLLECTION_MEMBERS + creatorId,
        [], eventDate
      );

      const updatedRefPathArray = getAddedEventsRefPathArray(
        await this._memberDatabaseController.readSingleMemberById(
          config.auth().currentUser && config.auth().currentUser.uid,
          errorFunction
        ),
        PATH_DB_COLLECTION_EVENTS + event.id
      );

      await this._memberDatabaseController.updateMemberById(
        config.auth().currentUser && config.auth().currentUser.uid,
        updatedRefPathArray,
        errorFunction
      );

      await this._databaseController
        .createData(PATH_DB_COLLECTION_EVENTS + event.id, event, errorFunction);

    } catch (err) {
      errorFunction();
    }
  };

  /**
   * Here has been done weird trick, after fetching document from DB,
   * refPath are resolved to get `real` data not to refPath, in order to do this to event object
   * new properties are added and to have access to `real` use this created properties
   */
  readSingleEventByID = async (id = PR(), errorFunction = PR()) => {
    try {
      const event = await this._databaseController
        .readSingleData(PATH_DB_COLLECTION_EVENTS + id, errorFunction);

      await this._fetchRefPathData(event, errorFunction);

      return event;

    } catch (err) {
      errorFunction();
    }
  };

  readAllEvents = async (errorFunction = PR()) => {
    try {
      return await this._doFetchRefPathDataOnArray(
        await this._shallowReadAllEvents(errorFunction),
        errorFunction
      );
    } catch (err) {
      errorFunction();
    }
  };

  readFutureEvents = async (errorFunction = PR()) => {
    try {
      const eventsArray = await this._shallowReadAllEvents(errorFunction);

      const futureEventsArray = [];
      for (const it of eventsArray) {
        if (new Date(it.eventDate) > getTomorrow()) {
          futureEventsArray.push(it);
        }
      }

      return await this._doFetchRefPathDataOnArray(futureEventsArray, errorFunction);

    } catch (err) {
      errorFunction();
    }
  };

  readPastEvents = async (errorFunction = PR()) => {
    try {
      const eventsArray = await this._shallowReadAllEvents(errorFunction);

      const pastEventsArray = [];
      for (const it of eventsArray) {
        if (new Date(it.eventDate) < getTomorrow()) {
          pastEventsArray.push(it);
        }
      }

      return await this._doFetchRefPathDataOnArray(pastEventsArray, errorFunction);

    } catch (err) {
      errorFunction();
    }
  };

  updateEventById = async (id = PR(), partialData = PR(), errorFunction = PR()) => {
    try {
      return await this._databaseController
        .updateData(PATH_DB_COLLECTION_EVENTS + id, partialData, errorFunction);
    } catch (err) {
      errorFunction();
    }
  };

  deleteEventById = async (id = PR(), errorFunction = PR()) => {
    try {
      await this._databaseController
        .deleteData(PATH_DB_COLLECTION_EVENTS + id, errorFunction);
    } catch (err) {
      errorFunction();
    }
  };

  /*----- PRIVATE METHODS -----*/
  _shallowReadAllEvents = async (errorFunction = PR()) => {
    try {
      return await this._databaseController
        .readAllData(PATH_DB_COLLECTION_EVENTS, errorFunction);
    } catch (err) {
      errorFunction();
    }
  };

  _doFetchRefPathDataOnArray = async (dataArray = PR(), errorFunction = PR()) => {
    const resultArray = [];
    for (const it of dataArray) {
      await this._fetchRefPathData(it, errorFunction);
      resultArray.push(it);
    }

    return resultArray;
  };

  _fetchRefPathData = async (eventObject = PR(), errorFunction = PR()) => {
    eventObject.racetrackData = await this._databaseController
      .readSingleData(eventObject.racetrackRefPath, errorFunction);

    eventObject.eventCreatorData = await this._databaseController
      .readSingleData(eventObject.eventCreatorRefPath, errorFunction);

    eventObject.membersDataArray = [];
    for (const it of eventObject.membersRefPathArray) {
      eventObject.membersDataArray.push(
        await this._databaseController.readSingleData(it, errorFunction)
      );
    }
  };
}
