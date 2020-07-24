import React from "react";
import propTypes from "prop-types";
import Card from "../../util/card/Card";
import {BrowserStorageController} from "../../../logic/controller/BrowserStorageController";
import {CHOSEN_EVENT_ID} from "../../../config/constant/browser-storage-contants";
import {PR} from "../../../logic/Helper";
import {generatePropertiesArray} from "../CardHelper";

export const EventCard = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const browserStorageController = new BrowserStorageController();

  const setChosenEvent = () => {
    browserStorageController
      .sessionStorageSaveItem(CHOSEN_EVENT_ID, props.eventObject.id);
  };

  const createPropertiesArray = (keysArray = PR(), eventObject = PR()) => {
    const chosenValueArray = [
      eventObject.racetrackData.name,
      eventObject.racetrackData.country,
      eventObject.racetrackData.city
    ];

    return generatePropertiesArray(keysArray, chosenValueArray);
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <Card
      gridStyles={props.gridStyles}
      redirectPath={props.redirectPath}
      handleRedirect={setChosenEvent}
      imagePath={props.eventObject.racetrackData.imageUrl}
      titleStyles={props.titleStyles}
      title={props.eventObject.name}
      propertiesArray={
        createPropertiesArray(props.eventPropertiesKeysArray, props.eventObject)
      }
    />
  );
};

EventCard.propTypes = {
  gridStyles: propTypes.string.isRequired,
  redirectPath: propTypes.string.isRequired,
  titleStyles: propTypes.string.isRequired,
  eventObject: propTypes.object.isRequired,
  eventPropertiesKeysArray: propTypes.array.isRequired,
};

export default EventCard;
