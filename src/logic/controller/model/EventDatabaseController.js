import {DatabaseController} from "../DatabaseController";
import {generateCustomUuid, PR} from "../../Helper";
import {PATH_DB_COLLECTION_EVENTS} from "../../../config/constant/firebase-constants";
import {Event} from "../../model/event/Event";

export class EventDatabaseController {

  /*------------------------ FIELDS REGION ------------------------*/
  _databaseController = new DatabaseController();

  /*------------------------ METHODS REGION ------------------------*/
  createEvent = async (eventName = PR(), racetrackId = PR(),
                       eventDate = PR(), errorFunction = PR()) => {
    try {
      const racetrackRefPath = PATH_DB_COLLECTION_EVENTS + racetrackId;

      const event = new Event(generateCustomUuid(),
        eventName, racetrackRefPath, [], eventDate);

      await this._databaseController
        .createData(PATH_DB_COLLECTION_EVENTS + event.id, event, errorFunction);
    } catch (err) {
      errorFunction();
    }
  };

  readSingleEventByID = async () => {
//TODO
  };

  readAllEvents = async () => {
//TODO
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
}
