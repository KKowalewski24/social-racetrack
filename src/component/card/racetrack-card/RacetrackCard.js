import React from "react";
import propTypes from "prop-types";
import BaseCard from "../base-card/BaseCard";

export const RacetrackCard = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const setChosenRacetrack = () => {
    //TODO
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
      imagePath={props.racetrackObject._imageUrl}
      titleStyles={props.titleStyles}
      title={props.racetrackObject._name}
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
