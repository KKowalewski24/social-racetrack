import React from "react";
import RenderEvents from "../../../component/events-display/render-events/RenderEvents";

export const FutureEventsPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <RenderEvents
      isFuture={true}
    />
  );
};

FutureEventsPage.propTypes = {};

export default FutureEventsPage;
