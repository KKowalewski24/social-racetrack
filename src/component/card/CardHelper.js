import {PR} from "../../logic/Helper";

export const generatePropertiesArray = (keysArray = PR(), chosenValueArray = PR()) => {
  if (keysArray.length !== chosenValueArray.length) {
    throw new Error("Arrays' length must be equal");
  }

  const resultArray = [];
  for (let i = 0; i < keysArray.length; i++) {
    resultArray.push({key: keysArray[i], value: chosenValueArray[i]});
  }

  return resultArray;
};

export const getCardGridStyles = () => {
  return "col-sm-5 col-md-4 col-lg-3 col-xl-2 m-3 p-0";
};
