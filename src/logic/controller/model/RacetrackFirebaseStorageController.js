import {FirebaseStorageController} from "../FirebaseStorageController";
import {METADATA_IMAGE, PATH_STORAGE_RACETRACK_IMAGE} from "../../../config/constant/firebase-constants";
import {PR} from "../../Helper";

export class RacetrackFirebaseStorageController {

  /*------------------------ FIELDS REGION ------------------------*/
  _firebaseStorageController = new FirebaseStorageController();

  /*------------------------ METHODS REGION ------------------------*/
  uploadRacetrackImage = async (filename = PR(), data = PR(), errorFunction = PR()) => {
    await this._firebaseStorageController
      .uploadFile(PATH_STORAGE_RACETRACK_IMAGE + filename, data, METADATA_IMAGE, errorFunction);

    return await this._firebaseStorageController
      .downloadFile(PATH_STORAGE_RACETRACK_IMAGE + filename, errorFunction);
  };

  deleteRacetrackImage = (path = PR(), errorFunction = PR()) => {
    this._firebaseStorageController
      .deleteFile(PATH_STORAGE_RACETRACK_IMAGE, errorFunction);
  };
}
