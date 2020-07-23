import {convertClassObjectToJsObject, PR} from "../Helper";
import config from "../../config/config";

export class DatabaseController {

  /*------------------------ FIELDS REGION ------------------------*/

  /*------------------------ METHODS REGION ------------------------*/
  getDocumentReference = (path = PR()) => {
    return config.firestore().doc(path);
  };

  createData = async (path = PR(), data = PR(), errorFunction = PR()) => {
    try {
      return await config.firestore()
        .doc(path)
        .set(convertClassObjectToJsObject(data));
    } catch (err) {
      errorFunction();
    }
  };

  readSingleData = async (path = PR(), errorFunction = PR()) => {
    try {
      const data = await config.firestore()
        .doc(path)
        .get();

      return data.data();

    } catch (err) {
      errorFunction();
    }
  };

  readAllData = async (collectionName = PR(), errorFunction = PR()) => {
    try {
      const data = await config.firestore()
        .collection(collectionName)
        .get();

      const documentsArray = [];
      data.docs && data.docs.map((it) => {
        return documentsArray.push(it.data());
      });

      return documentsArray;

    } catch (err) {
      errorFunction();
    }
  };

  updateData = async (path = PR(), partialData = PR(), errorFunction = PR()) => {
    try {
      return await config.firestore()
        .doc(path)
        .update(convertClassObjectToJsObject(partialData));
    } catch (err) {
      errorFunction();
    }
  };

  deleteData = async (path = PR(), errorFunction = PR()) => {
    try {
      return await config.firestore()
        .doc(path)
        .delete();
    } catch (err) {
      errorFunction();
    }
  };
}
