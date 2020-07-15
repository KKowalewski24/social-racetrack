import config from "../../config/config";
import {PR} from "../Helper";

export class DatabaseController {

  /*------------------------ FIELDS REGION ------------------------*/
    //TODO CHECK IF WORKS
  /*------------------------ METHODS REGION ------------------------*/
  createData = async (path = PR(), data = PR(), errorFunction = PR()) => {
    try {
      await config.firestore()
        .doc(path)
        .set(data);
    } catch (err) {
      errorFunction();
    }
  };

  readSingleData = async (path = PR(), errorFunction = PR()) => {
    try {
      return await config.firestore()
        .doc(path)
        .get();
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
      data.docs.map((it) => documentsArray.push(it.data()));

      return documentsArray;

    } catch (err) {
      errorFunction();
    }
  };

  updateData = async () => {
    //TODO
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
