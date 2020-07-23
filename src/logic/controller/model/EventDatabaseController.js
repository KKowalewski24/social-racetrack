import {DatabaseController} from "../DatabaseController";
import {generateCustomUuid, PR} from "../../Helper";
import {Event} from "../../model/event/Event";
import {
  PATH_DB_COLLECTION_EVENTS,
  PATH_DB_COLLECTION_MEMBERS,
  PATH_DB_COLLECTION_RACETRACKS
} from "../../../config/constant/firebase-constants";

export class EventDatabaseController {

  /*------------------------ FIELDS REGION ------------------------*/
  _databaseController = new DatabaseController();

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
      const eventsArray = await this._databaseController
        .readAllData(PATH_DB_COLLECTION_EVENTS, errorFunction);

      const resultArray = [];
      for (const it of eventsArray) {
        resultArray.push(await this.readSingleEventByID(it.id, errorFunction));
      }

      return resultArray;

    } catch (err) {
      errorFunction();
    }
  };

  updateEvent = async () => {
//TODO
  };

  deleteEvent = async (id = PR(), errorFunction = PR()) => {
    try {
      await this._databaseController
        .deleteData(PATH_DB_COLLECTION_EVENTS + id, errorFunction);
    } catch (err) {
      errorFunction();
    }
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
