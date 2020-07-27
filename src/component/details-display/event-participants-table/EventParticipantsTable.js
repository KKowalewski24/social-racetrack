import React from "react";
import propTypes from "prop-types";
import GlobalStyles from "../../../main/GlobalStyles";
import strings from "../../../config/constant/string-constants";
import DetailsTable from "../../util/details-table/DetailsTable";

export const EventParticipantsTable = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const globalStyles = GlobalStyles();

  const renderHead = () => {
    return (
      <thead>
        <tr>
          <th>{strings.eventDetailsPage.orderSign}</th>
          <th>{strings.eventDetailsPage.firstName}</th>
          <th>{strings.eventDetailsPage.lastName}</th>
          <th>{strings.eventDetailsPage.country}</th>
          <th>{strings.eventDetailsPage.city}</th>
        </tr>
      </thead>
    );
  };

  const renderBody = () => {
    return (
      <tbody>
        {
          props.membersDataArray
          && props.membersDataArray.map((it, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{it.firstName}</td>
                <td>{it.lastName}</td>
                <td>{it.country}</td>
                <td>{it.city}</td>
              </tr>
            );
          })
        }
      </tbody>
    );
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <DetailsTable
      panelBackgroundColor={globalStyles.materialBlueBackground}
      margin={"custom-hor-cont-margin-bottom"}
      renderHead={renderHead}
      renderBody={renderBody}
    />
  );
};

EventParticipantsTable.propTypes = {
  membersDataArray: propTypes.array.isRequired,
};

export default EventParticipantsTable;
