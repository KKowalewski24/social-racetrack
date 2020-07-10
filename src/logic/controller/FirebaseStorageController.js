import config from "../../config/config";
import {PR} from "../Helper";

export class FirebaseStorageController {

  /*------------------------ FIELDS REGION ------------------------*/

  /*------------------------ METHODS REGION ------------------------*/
  uploadFile = (path = PR(), data = PR(),
                metadata = PR(), errorFunction = PR()) => {
    config.storage()
      .ref(path)
      .put(data, metadata)
      .catch((err) => {
        console.log(err);
        errorFunction();
      });
  };

  /**
   * Sample usage below
   * firebaseStorageController
   *  .downloadFile("/abc", (error) => console.log(error))
   *  .then((result) => console.log(result));
   */
  downloadFile = async (path = PR(), errorFunction = PR()) => {
    let result = "";

    await config.storage()
      .ref(path)
      .getDownloadURL()
      .then((res) => {
        result = res;
      })
      .catch((err) => console.log(err));

    return result;
  };

  deleteFile = (path = PR(), errorFunction = PR()) => {
    config.storage()
      .ref(path)
      .delete()
      .catch((err) => {
        console.log(err);
        errorFunction();
      });
  };
}
