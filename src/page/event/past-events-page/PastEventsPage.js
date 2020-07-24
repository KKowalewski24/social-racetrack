import React from "react";
import RenderEvents from "../../../component/events/RenderEvents";

export const PastEventsPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <RenderEvents
      isFuture={false}
    />
  );
};

PastEventsPage.propTypes = {};

export default PastEventsPage;
