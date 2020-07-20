import {DatabaseController} from "../DatabaseController";
import {PATH_DB_COLLECTION_RACETRACKS} from "../../../config/constant/firebase-constants";
import {RacetrackFirebaseStorageController} from "./RacetrackFirebaseStorageController";
import {PR} from "../../Helper";

export class RacetrackDatabaseController {

  /*------------------------ FIELDS REGION ------------------------*/
  _databaseController = new DatabaseController();
  _racetrackFirebaseStorageController = new RacetrackFirebaseStorageController();

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
      await this._databaseController
        .deleteData(PATH_DB_COLLECTION_RACETRACKS + id, errorFunction);
      await this._racetrackFirebaseStorageController
        .deleteRacetrackImage(imageUrl, errorFunction);
    } catch (err) {
      errorFunction();
    }
  };
}
