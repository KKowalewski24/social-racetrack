import React from "react";
import propTypes from "prop-types";
import strings from "../../config/constant/string-constants";
import HorizontalContainer from "../horizontal-container/HorizontalContainer";
import GlobalStyles from "../../main/GlobalStyles";
import "../../index.css";

export const DisplayUserData = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const globalStyles = GlobalStyles();

  const renderBoldText = (text) => {
    return (
      <div className="font-weight-bold mb-1">
        {text}
      </div>
    );
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <HorizontalContainer panelBackgroundColor={props.panelBackgroundColor}>
      <div className="row justify-content-center mb-3">
        <div className="col-md-12 text-center font-weight-bold custom-font-size-1-5">
          <b>{strings.accountPage.name + ": " + props.firstName + " " + props.lastName}</b>
        </div>
      </div>

      <div className="row justify-content-center custom-font-size-1">
        <div className="col-md-6 text-center">
          {renderBoldText(strings.accountPage.country + ": " + props.country)}
          {renderBoldText(strings.accountPage.city + ": " + props.city)}
          {renderBoldText(strings.accountPage.age + ": " + props.age)}
        </div>

        <div className="col-md-6 text-center">
          {renderBoldText(strings.accountPage.joinDate + ": " + props.joinDate)}
          {renderBoldText(strings.accountPage.lastLogin + ": " + props.lastLogin)}
        </div>
      </div>

    </HorizontalContainer>
  );
};

DisplayUserData.propTypes = {
  panelBackgroundColor: propTypes.string.isRequired,
  firstName: propTypes.string.isRequired,
  lastName: propTypes.string.isRequired,
  country: propTypes.string.isRequired,
  city: propTypes.string.isRequired,
  age: propTypes.number.isRequired,
  lastLogin: propTypes.string.isRequired,
  joinDate: propTypes.string.isRequired,
};

export default DisplayUserData;
