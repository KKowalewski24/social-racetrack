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

export const formatDate = (date) => {
  return date.toDateString();
};
