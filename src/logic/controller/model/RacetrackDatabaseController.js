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

  /**
   * @param path is object's id
   * @param errorFunction
   */
  readSingleRacetrack = async (path = PR(), errorFunction = PR()) => {
    try {
      return await this._databaseController
        .readSingleData(PATH_DB_COLLECTION_RACETRACKS + path, errorFunction);
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

  /**
   * @param path is object's id
   * @param errorFunction
   */
  deleteRacetrack = (path = PR(), errorFunction = PR()) => {
    this._databaseController
      .deleteData(PATH_DB_COLLECTION_RACETRACKS + path, errorFunction)
      .catch((err) => errorFunction());
  };
}
