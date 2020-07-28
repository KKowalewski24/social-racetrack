import React from "react";
import propTypes from "prop-types";
import strings from "../../../config/constant/string-constants";
import DetailsTable from "../../util/details-table/DetailsTable";
import GlobalStyles from "../../../main/GlobalStyles";
import "../../../index.css";

export const RacetrackDetailsTable = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const globalStyles = GlobalStyles();

  const renderBody = () => {
    return (
      <tbody>
        {
          props.isShowRacetrackName ?
            <tr>
              <th>{strings.racetrackDetailsPage.racetrackName}</th>
              <td>{props.racetrack.name}</td>
            </tr>
            : null
        }
        <tr>
          <th>{strings.racetrackDetailsPage.country}</th>
          <td>{props.racetrack.country}</td>
        </tr>
        <tr>
          <th>{strings.racetrackDetailsPage.city}</th>
          <td>{props.racetrack.city}</td>
        </tr>
        <tr>
          <th>{strings.racetrackDetailsPage.lengthInMeters}</th>
          <td>{props.racetrack.lengthInMeters}</td>
        </tr>
        <tr>
          <th>{strings.racetrackDetailsPage.turnsNumber}</th>
          <td>{props.racetrack.turnsNumber}</td>
        </tr>
        <tr>
          <th>{strings.racetrackDetailsPage.maximumExhaustLoudnessInDecibels}</th>
          <td>{props.racetrack.maximumExhaustLoudnessInDecibels}</td>
        </tr>
        <tr>
          <th>{strings.racetrackDetailsPage.minimumRideHeightInMillimeters}</th>
          <td>{props.racetrack.minimumRideHeightInMillimeters}</td>
        </tr>
      </tbody>
    );
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <DetailsTable
      panelBackgroundColor={globalStyles.materialBlueBackground}
      margin={"custom-hor-cont-margin-bottom"}
      renderBody={renderBody}
    />
  );
};

RacetrackDetailsTable.propTypes = {
  racetrack: propTypes.object.isRequired,
  isShowRacetrackName: propTypes.bool.isRequired,
};

export default RacetrackDetailsTable;
