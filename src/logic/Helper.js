import {v4 as uuidv4} from "uuid";

/**
 * Change object into array
 */
export const keyValueObjectToArray = (object = PR()) => {
  return Object.entries(object).map(([key, value]) => (value));
};

/**
 * PR stands from ParamRequired - throw Error if param is not passed to function call
 */
export const PR = () => {
  // TODO DURING DEVELOPMENT PROCESS BELOW LINE SHOULD BE UNCOMMENTED
  throw new Error("Param Is Required!");
};

export const formatDate = (date = PR()) => {
  return date.toDateString();
};

export const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const getDateInPastMovedByYearValue = (yearDifference = PR()) => {
  return new Date(new Date().setFullYear(new Date().getFullYear() - yearDifference));
};

export const getYesterday = () => {
  return new Date(new Date().setDate(new Date().getDate() - 1));
};

export const getTomorrow = () => {
  return new Date(new Date().setDate(new Date().getDate() + 1));
};

export const getEnumKeyValueArray = (enumObject = PR()) => {
  const keyValueArray = [];

  Object.entries(enumObject).forEach(([key, value]) => {
    keyValueArray.push({
      key: key,
      value: value,
    });
  });

  return keyValueArray;
};

/**
 * Method convert object created from class to regular JS object e.g. const user = {//...};
 */
export const convertClassObjectToJsObject = (object = PR()) => {
  return JSON.parse(JSON.stringify(object));
};

export const generateCustomUuid = () => {
  return uuidv4();
};

export const generateCustomUuidWithSecond = () => {
  return new Date().getUTCMilliseconds() + uuidv4();
};

export const redirectToPage = (history = PR(), path = PR()) => {
  history.push(path);
};

export const redirectIfUndefined = (value = PR(), path = PR()) => {
  if (value === undefined) {
    redirectToPage(path);
  }
};

export const checkIfContains = (text = PR(), query = PR()) => {
  return text.toLowerCase().includes(query);
};
