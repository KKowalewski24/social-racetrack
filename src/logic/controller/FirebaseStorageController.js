import config from "../../config/config";
import {PR} from "../Helper";

export class FirebaseStorageController {

  /*------------------------ FIELDS REGION ------------------------*/

  /*------------------------ METHODS REGION ------------------------*/
  uploadFile = async (path = PR(), data = PR(),
                      metadata = PR(), errorFunction = PR()) => {
    try {
      return await config.storage()
        .ref(path)
        .put(data, metadata);
    } catch (err) {
      console.log(err);
      errorFunction();
    }
  };

  downloadFile = async (path = PR(), errorFunction = PR()) => {
    try {
      return await config.storage()
        .ref(path)
        .getDownloadURL();
    } catch (err) {
      console.log(err);
      errorFunction();
    }
  };

  deleteFileByPath = (path = PR(), errorFunction = PR()) => {
    config.storage()
      .ref(path)
      .delete()
      .catch((err) => {
        console.log(err);
        errorFunction();
      });
  };

  deleteFileByUrl = (url = PR(), errorFunction = PR()) => {
    config.storage()
      .refFromURL(url)
      .delete()
      .catch((err) => {
        console.log(err);
        errorFunction();
      });
  };
}
