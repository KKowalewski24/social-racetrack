import {DatabaseController} from "../DatabaseController";
import {PR} from "../../Helper";
import {PATH_DB_COLLECTION_MEMBERS} from "../../../config/constant/firebase-constants";

export class MemberDatabaseController {

  /*------------------------ FIELDS REGION ------------------------*/
  _databaseController = new DatabaseController();

  /*------------------------ METHODS REGION ------------------------*/
  createMember = async (data = PR(), errorFunction = PR()) => {
    try {
      return await this._databaseController
        .createData(PATH_DB_COLLECTION_MEMBERS + data.id, data, errorFunction);
    } catch (err) {
      errorFunction();
    }
  };

  readSingleMemberById = async (id = PR(), errorFunction = PR()) => {
    try {
      const member = await this._databaseController
        .readSingleData(PATH_DB_COLLECTION_MEMBERS + id, errorFunction);

      await this._fetchRefPathData(member, errorFunction);

      return member;

    } catch (err) {
      errorFunction();
    }
  };

  readAllMembers = async (errorFunction = PR()) => {
    try {
      const membersArray = await this._databaseController
        .readAllData(PATH_DB_COLLECTION_MEMBERS, errorFunction);

      return await this._doFetchRefPathDataOnArray(membersArray, errorFunction);

    } catch (err) {
      errorFunction();
    }
  };

  updateMemberById = async (id = PR(), partialData = PR(), errorFunction = PR()) => {
    try {
      return await this._databaseController
        .updateData(PATH_DB_COLLECTION_MEMBERS + id, partialData, errorFunction);
    } catch (err) {
      errorFunction();
    }
  };

  /*----- PRIVATE METHODS -----*/
  _doFetchRefPathDataOnArray = async (dataArray = PR(), errorFunction = PR()) => {
    const resultArray = [];
    for (const it of dataArray) {
      await this._fetchRefPathData(it, errorFunction);
      resultArray.push(it);
    }

    return resultArray;
  };

  _fetchRefPathData = async (memberObject = PR(), errorFunction = PR()) => {
    memberObject.eventsDataArray = [];

    for (const it of memberObject.eventsRefPathArray) {
      memberObject.eventsDataArray.push(
        await this._databaseController.readSingleData(it, errorFunction)
      );
    }

    for (const it of memberObject.eventsDataArray) {
      it.racetrackData = await this._databaseController
        .readSingleData(it.racetrackRefPath, errorFunction);
    }
  };
}
