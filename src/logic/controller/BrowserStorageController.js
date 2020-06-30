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

  localStorageRemoveItem = (key = PR()) => {
    localStorage.removeItem(key);
  };

  localStorageClear = () => {
    localStorage.clear();
  };
}
