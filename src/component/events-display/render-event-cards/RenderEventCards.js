import React from "react";
import propTypes from "prop-types";
import strings from "../../../config/constant/string-constants";
import EventCard from "../../rest/card/event-card/EventCard";
import {getCardGridStyles} from "../../rest/card/CardHelper";
import {PATH_EVENT_DETAILS} from "../../../config/constant/path-constants";

export const RenderEventCards = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const cardPropertiesKeysArray = [
    strings.eventsPage.cardPropertiesKeysRacetrack,
    strings.eventsPage.cardPropertiesKeysCountry,
    strings.eventsPage.cardPropertiesKeysCity
  ];

  /*------------------------ RETURN REGION ------------------------*/
  return props.filteredEventsArray
    && props.filteredEventsArray.map((it, index) => {
      return (
        <EventCard
          key={index}
          gridStyles={getCardGridStyles()}
          redirectPath={PATH_EVENT_DETAILS}
          titleStyles={props.titleStyles}
          eventObject={it}
          eventPropertiesKeysArray={cardPropertiesKeysArray}
        />
      );
    });
};

RenderEventCards.propTypes = {
  filteredEventsArray: propTypes.array.isRequired,
  titleStyles: propTypes.string.isRequired,
};

export default RenderEventCards;
