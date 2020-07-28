import {PR} from "../Helper";

export class BrowserStorageController {

  /*------------------------ FIELDS REGION ------------------------*/

  /*------------------------ METHODS REGION ------------------------*/
  sessionStorageSaveItem = (key = PR(), item = PR()) => {
    sessionStorage.setItem(key, JSON.stringify(item));
  };

  sessionStorageGetItem = (key = PR()) => {
    return JSON.parse(sessionStorage.getItem(key));
  };

  sessionStorageAppendArray = (key = PR(), item = PR()) => {
    const dataArray = this.sessionStorageGetItem(key);

    if (dataArray !== null) {
      dataArray.push(item);
      this.sessionStorageSaveItem(key, dataArray);
    } else {
      this.sessionStorageSaveItem(key, [item]);
    }
  };

  sessionStorageRemoveItem = (key = PR()) => {
    sessionStorage.removeItem(key);
  };

  sessionStorageClear = () => {
    sessionStorage.clear();
  };

  localStorageSaveItem = (key = PR(), item = PR()) => {
    localStorage.setItem(key, JSON.stringify(item));
  };

  localStorageGetItem = (key = PR()) => {
    return JSON.parse(localStorage.getItem(key));
  };

  localStorageAppendArray = (key = PR(), item = PR()) => {
    const dataArray = this.localStorageGetItem(key);

    if (dataArray !== null) {
      dataArray.push(item);
      this.localStorageSaveItem(key, dataArray);
    } else {
      this.localStorageSaveItem(key, [item]);
    }
  };

  localStorageRemoveItem = (key = PR()) => {
    localStorage.removeItem(key);
  };

  localStorageClear = () => {
    localStorage.clear();
  };
}
