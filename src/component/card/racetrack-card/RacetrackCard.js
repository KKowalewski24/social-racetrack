import React from "react";
import propTypes from "prop-types";
import BaseCard from "../base-card/BaseCard";
import {BrowserStorageController} from "../../../logic/controller/BrowserStorageController";
import {CHOSEN_RACETRACK_ID} from "../../../config/constant/browser-storage-contants";

export const RacetrackCard = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const browserStorageController = new BrowserStorageController();

  const setChosenRacetrack = () => {
    browserStorageController
      .sessionStorageSaveItem(CHOSEN_RACETRACK_ID, props.racetrackObject.id);
  };

  const generatePropertiesArray = () => {
    //TODO
    return [
      {key: "abc", value: "cde"}
    ];
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
      propertiesArray={generatePropertiesArray()}
    />
  );
};

RacetrackCard.propTypes = {
  gridStyles: propTypes.string.isRequired,
  redirectPath: propTypes.string.isRequired,
  titleStyles: propTypes.string.isRequired,
  racetrackObject: propTypes.object.isRequired,
};

export default RacetrackCard;
