import {DatabaseController} from "../DatabaseController";
import {PATH_DB_COLLECTION_RACETRACKS} from "../../../config/constant/firebase-constants";
import {convertClassObjectToJsObject, PR} from "../../Helper";

export class RacetrackDatabaseController {

  /*------------------------ FIELDS REGION ------------------------*/
  _databaseController = new DatabaseController();

  /*------------------------ METHODS REGION ------------------------*/
  createRacetrack = (data = PR(), errorFunction = PR()) => {
    this._databaseController
      .createData(
        PATH_DB_COLLECTION_RACETRACKS + data.id,
        convertClassObjectToJsObject(data),
        errorFunction
      )
      .catch((err) => errorFunction());
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

  deleteRacetrackById = (id = PR(), errorFunction = PR()) => {
    this._databaseController
      .deleteData(PATH_DB_COLLECTION_RACETRACKS + id, errorFunction)
      .catch((err) => errorFunction());
  };
}
