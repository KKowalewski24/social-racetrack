import {DatabaseController} from "../DatabaseController";
import {RacetrackFirebaseStorageController} from "./RacetrackFirebaseStorageController";
import {PR} from "../../Helper";
import {EventDatabaseController} from "./EventDatabaseController";
import {
  PATH_DB_COLLECTION_EVENTS,
  PATH_DB_COLLECTION_RACETRACKS,
  QUERY_FIELD_EVENT_MODEL_RACETRACK_REF_PATH, QUERY_OPERATOR_EQUAL
} from "../../../config/constant/firebase-constants";

export class RacetrackDatabaseController {

  /*------------------------ FIELDS REGION ------------------------*/
  _databaseController = new DatabaseController();
  _racetrackFirebaseStorageController = new RacetrackFirebaseStorageController();
  _eventDatabaseController = new EventDatabaseController();

  /*------------------------ METHODS REGION ------------------------*/
  createRacetrack = async (data = PR(), errorFunction = PR()) => {
    try {
      await this._databaseController
        .createData(PATH_DB_COLLECTION_RACETRACKS + data.id, data, errorFunction);
    } catch (err) {
      errorFunction();
    }
  };

  readSingleRacetrackById = async (id = PR(), errorFunction = PR()) => {
    try {
      return await this._databaseController
        .readSingleData(PATH_DB_COLLECTION_RACETRACKS + id, errorFunction);
    } catch (err) {
      errorFunction();
    }
  };

  readAllRacetracks = async (errorFunction = PR()) => {
    try {
      return await this._databaseController
        .readAllData(PATH_DB_COLLECTION_RACETRACKS, errorFunction);
    } catch (err) {
      errorFunction();
    }
  };

  deleteRacetrackById = async (id = PR(), imageUrl = PR(), errorFunction = PR()) => {
    try {
      const chosenIdEventArray = await this._databaseController.singleQuery(
        PATH_DB_COLLECTION_EVENTS,
        QUERY_FIELD_EVENT_MODEL_RACETRACK_REF_PATH,
        QUERY_OPERATOR_EQUAL,
        PATH_DB_COLLECTION_RACETRACKS + id,
        errorFunction
      );

      for (const it of chosenIdEventArray) {
        await this._eventDatabaseController.deleteEventById(it.id, errorFunction);
      }

      await this._databaseController
        .deleteData(PATH_DB_COLLECTION_RACETRACKS + id, errorFunction);
      await this._racetrackFirebaseStorageController
        .deleteRacetrackImage(imageUrl, errorFunction);
    } catch (err) {
      errorFunction();
    }
  };
}
