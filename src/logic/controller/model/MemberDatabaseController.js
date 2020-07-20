import {DatabaseController} from "../DatabaseController";
import {PATH_DB_COLLECTION_MEMBERS} from "../../../config/constant/firebase-constants";
import {convertClassObjectToJsObject, PR} from "../../Helper";

export class MemberDatabaseController {

  /*------------------------ FIELDS REGION ------------------------*/
  _databaseController = new DatabaseController();

  /*------------------------ METHODS REGION ------------------------*/
  createMember = async (data = PR(), errorFunction = PR()) => {
    try {
      return await this._databaseController.createData(
        PATH_DB_COLLECTION_MEMBERS + data.id,
        convertClassObjectToJsObject(data),
        errorFunction
      );
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

  updateMember = async () => {
//TODO
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
