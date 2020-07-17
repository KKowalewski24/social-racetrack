import React from "react";
import propTypes from "prop-types";
import BaseCard from "../base-card/BaseCard";
import {BrowserStorageController} from "../../../logic/controller/BrowserStorageController";
import {CHOSEN_RACETRACK_ID} from "../../../config/constant/browser-storage-contants";
import {PR} from "../../../logic/Helper";

export const RacetrackCard = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const browserStorageController = new BrowserStorageController();

  const setChosenRacetrack = () => {
    browserStorageController
      .sessionStorageSaveItem(CHOSEN_RACETRACK_ID, props.racetrackObject.id);
  };

  const generatePropertiesArray = (racetrackObject = PR(), keysArray = PR()) => {
    const chosenValueArray = [
      racetrackObject.country,
      racetrackObject.city,
      racetrackObject.lengthInMeters
    ];

    if (keysArray.length !== chosenValueArray.length) {
      throw new Error("Arrays' length must be equal");
    }

    const resultArray = [];

    for (let i = 0; i < keysArray.length; i++) {
      resultArray.push({key: keysArray[i], value: chosenValueArray[i]});
    }

    return resultArray;
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <BaseCard
      gridStyles={props.gridStyles}
      redirectPath={props.redirectPath}
      handleRedirect={setChosenRacetrack}
      imagePath={props.racetrackObject.imageUrl}
      titleStyles={props.titleStyles}
      title={props.racetrackObject.name}
      propertiesArray={
        generatePropertiesArray(props.racetrackObject, props.racetrackPropertiesKeysArray)
      }
    />
  );
};

RacetrackCard.propTypes = {
  gridStyles: propTypes.string.isRequired,
  redirectPath: propTypes.string.isRequired,
  titleStyles: propTypes.string.isRequired,
  racetrackObject: propTypes.object.isRequired,
  racetrackPropertiesKeysArray: propTypes.array.isRequired,
};

export default RacetrackCard;
