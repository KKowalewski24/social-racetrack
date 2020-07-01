import config from "../../config/config";
import {PR} from "../Helper";

export class FirebaseStorageController {

  /*------------------------ FIELDS REGION ------------------------*/

  /*------------------------ METHODS REGION ------------------------*/
  uploadFile = (path = PR(), data = PR(),
                metadata = PR(), errorFunction = PR()) => {
    //TODO CHECK IF WORKS
    config.storage()
      .ref(path)
      .put(data, metadata)
      .catch(() => {
        errorFunction();
      });
  };

  downloadFile = () => {
    //TODO CHECK IF WORKS

  };

  deleteFile = (path = PR(), errorFunction = PR()) => {
    //TODO CHECK IF WORKS
    config.storage()
      .ref(path)
      .delete()
      .catch(() => {
        errorFunction();
      });
  };
}
