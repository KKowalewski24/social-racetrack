import {DatabaseController} from "../DatabaseController";
import {PATH_DB_COLLECTION_MEMBERS} from "../../../config/constant/firebase-constants";
import {PR} from "../../Helper";

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
      return await this._databaseController
        .readSingleData(PATH_DB_COLLECTION_MEMBERS + id, errorFunction);
    } catch (err) {
      errorFunction();
    }
  };

  readAllMembers = async (errorFunction = PR()) => {
    try {
      return await this._databaseController
        .readAllData(PATH_DB_COLLECTION_MEMBERS, errorFunction);
    } catch (err) {
      errorFunction();
    }
  };

  updateMember = async (id = PR(), partialData = PR(), errorFunction = PR()) => {
    try {
      return await this._databaseController
        .updateData(PATH_DB_COLLECTION_MEMBERS + id, partialData, errorFunction);
    } catch (err) {
      errorFunction();
    }
  };

  deleteMember = async (id = PR(), errorFunction = PR()) => {
    try {
      return await this._databaseController
        .deleteData(PATH_DB_COLLECTION_MEMBERS + id, errorFunction);
    } catch (err) {
      errorFunction();
    }
  };
}
