import {PR} from "../Helper";

/*----------------------- SESSION STORAGE -----------------------*/
export const SessionStorageSaveItem = (key = PR(), item = PR()) => {
  sessionStorage.setItem(key, JSON.stringify(item));
};

export const SessionStorageGetItem = (key = PR()) => {
  return JSON.parse(sessionStorage.getItem(key));
};

export const SessionStorageRemoveItem = (key = PR()) => {
  sessionStorage.removeItem(key);
};

export const SessionStorageClear = () => {
  sessionStorage.clear();
};

/*----------------------- LOCAL STORAGE -----------------------*/
export const LocalStorageSaveItem = (key = PR(), item = PR()) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const LocalStorageGetItem = (key = PR()) => {
  return JSON.parse(localStorage.getItem(key));
};

export const LocalStorageRemoveItem = (key = PR()) => {
  localStorage.removeItem(key);
};

export const LocalStorageClear = () => {
  localStorage.clear();
};
