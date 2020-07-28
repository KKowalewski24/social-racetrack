import {FirebaseStorageController} from "../FirebaseStorageController";
import {METADATA_IMAGE, PATH_STORAGE_RACETRACK_IMAGE} from "../../../config/constant/firebase-constants";
import {PR} from "../../Helper";

export class RacetrackFirebaseStorageController {

  /*------------------------ FIELDS REGION ------------------------*/
  _firebaseStorageController = new FirebaseStorageController();

  /*------------------------ METHODS REGION ------------------------*/

  /**
   * Method returns uploaded image URL
   */
  uploadRacetrackImage = async (filename = PR(), data = PR(), errorFunction = PR()) => {
    await this._firebaseStorageController
      .uploadFile(PATH_STORAGE_RACETRACK_IMAGE + filename, data, METADATA_IMAGE, errorFunction);

    return await this._firebaseStorageController
      .downloadFile(PATH_STORAGE_RACETRACK_IMAGE + filename, errorFunction);
  };

  deleteRacetrackImage = (imageUrl = PR(), errorFunction = PR()) => {
    this._firebaseStorageController
      .deleteFileByUrl(imageUrl, errorFunction);
  };
}
