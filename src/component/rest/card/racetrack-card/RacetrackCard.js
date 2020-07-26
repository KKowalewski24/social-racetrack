import React from "react";
import propTypes from "prop-types";
import Card from "../../../util/card/Card";
import {BrowserStorageController} from "../../../../logic/controller/BrowserStorageController";
import {CHOSEN_RACETRACK_ID} from "../../../../config/constant/browser-storage-contants";
import {PR} from "../../../../logic/Helper";
import {generatePropertiesArray} from "../CardHelper";

export const RacetrackCard = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const browserStorageController = new BrowserStorageController();

  const setChosenRacetrack = () => {
    browserStorageController
      .sessionStorageSaveItem(CHOSEN_RACETRACK_ID, props.racetrackObject.id);
  };

  const createPropertiesArray = (keysArray = PR(), racetrackObject = PR()) => {
    const chosenValueArray = [
      racetrackObject.country,
      racetrackObject.city,
      racetrackObject.lengthInMeters
    ];

    return generatePropertiesArray(keysArray, chosenValueArray);
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <Card
      gridStyles={props.gridStyles}
      redirectPath={props.redirectPath}
      handleRedirect={setChosenRacetrack}
      imagePath={props.racetrackObject.imageUrl}
      titleStyles={props.titleStyles}
      title={props.racetrackObject.name}
      propertiesArray={
        createPropertiesArray(props.racetrackPropertiesKeysArray, props.racetrackObject)
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
