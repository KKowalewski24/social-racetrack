import {CarType} from "./model/car/CarType";

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

export const formatDate = (date = PR()) => {
  return date.toDateString();
};

export const getCurrentYear = () => {
  return new Date().getFullYear();
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
