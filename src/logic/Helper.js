import {v4 as uuidv4} from "uuid";

/**
 * Change object into array
 * @param object
 * @returns {unknown[]}
 */
export const keyValueObjectToArray = (object = PR()) => {
  return Object.entries(object).map(([key, value]) => (value));
};

/**
 * PR stands from ParamRequired - throw Error if param is not passed to function call
 * @constructor
 */
export const PR = () => {
  throw new Error("Param Is Required!");
};

/**
 *
 * @param date
 * @returns {string}
 */
export const formatDate = (date = PR()) => {
  return date.toDateString();
};

/**
 *
 * @returns {number}
 */
export const getCurrentYear = () => {
  return new Date().getFullYear();
};

/**
 *
 * @param enumObject
 * @returns {[]}
 */
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
 * @param object
 * @returns {any}
 */
export const convertClassObjectToJsObject = (object) => {
  return JSON.parse(JSON.stringify(object));
};

/**
 *
 * @returns {string}
 */
const generateCustomUuid = () => {
  return uuidv4();
};

/**
 *
 * @returns {string}
 */
export const generateCustomUuidWithSecond = () => {
  return new Date().getUTCMilliseconds() + uuidv4();
};
