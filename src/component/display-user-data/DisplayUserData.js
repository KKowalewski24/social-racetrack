import React from "react";
import propTypes from "prop-types";
import strings from "../../config/constant/string-constants";
import HorizontalContainer from "../horizontal-container/HorizontalContainer";
import "../../index.css";

export const DisplayUserData = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const renderBoldText = (text) => {
    return (
      <div className="font-weight-bold mb-1">
        {text}
      </div>
    );
  };

  const renderHeader = (text) => {
    return (
      <div className="row justify-content-center mb-3">
        <div className="col-md-12 text-center font-weight-bold custom-font-size-1-5">
          <b>{text}</b>
        </div>
      </div>
    );
  };

  const renderUserInformation = () => {
    return (
      <HorizontalContainer panelBackgroundColor={props.panelBackgroundColor}>
        {renderHeader(strings.accountPage.name + ": " + props.firstName + " " + props.lastName)}

        <div className="row justify-content-center custom-font-size-1">
          <div className="col-md-6 text-center">
            {renderBoldText(strings.accountPage.country + ": " + props.country)}
            {renderBoldText(strings.accountPage.city + ": " + props.city)}
            {
              props.joinDate ?
                renderBoldText(strings.accountPage.joinDate + ": " + props.joinDate)
                : null
            }
          </div>

          <div className="col-md-6 text-center">
            {renderBoldText(strings.accountPage.age + ": " + props.age)}
            {
              props.lastLogin ?
                renderBoldText(strings.accountPage.lastLogin + ": " + props.lastLogin)
                : null
            }
          </div>
        </div>
      </HorizontalContainer>
    );
  };

  const renderUserCars = () => {
    return (
      <HorizontalContainer panelBackgroundColor={props.panelBackgroundColor}>
        {renderHeader(strings.accountPage.cars)}

        <div className="row justify-content-center">
          <table
            className="table table-responsive table-striped w-auto custom-font-size-0-5 text-white"
          >
            <thead>
              <tr>
                <th>{strings.accountPage.brand}</th>
                <th>{strings.accountPage.model}</th>
                <th>{strings.accountPage.productionYear}</th>
                <th>{strings.accountPage.carType}</th>
                <th>{strings.accountPage.mileage}</th>
                <th>{strings.accountPage.engineType}</th>
                <th>{strings.accountPage.enginePower}</th>
                <th>{strings.accountPage.driveTrainType}</th>
              </tr>
            </thead>
            <tbody>
              {
                props.carsArray.map((it, index) => {
                  return (
                    <tr key={index}>
                      <td>{it.brand}</td>
                      <td>{it.model}</td>
                      <td>{it.productionYear}</td>
                      <td>{it.carType}</td>
                      <td>{it.mileage}</td>
                      <td>{it.engineType}</td>
                      <td>{it.enginePower}</td>
                      <td>{it.driveTrainType}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </HorizontalContainer>
    );
  };

  const renderUserAwards = () => {
    return (
      <HorizontalContainer panelBackgroundColor={props.panelBackgroundColor}>
        {renderHeader(strings.accountPage.awards)}

        <div className="row justify-content-center">
          <table
            className="table table-responsive table-striped w-auto custom-font-size-0-5 text-white"
          >
            <thead>
              <tr>
                <th>{strings.accountPage.description}</th>
                <th>{strings.accountPage.year}</th>
              </tr>
            </thead>
            <tbody>
              {
                props.receivedAwardsArray.map((it, index) => {
                  return (
                    <tr key={index}>
                      <td>{it.description}</td>
                      <td>{it.year}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </HorizontalContainer>
    );
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <>
      {renderUserInformation()}
      {renderUserCars()}
      {renderUserAwards()}
    </>
  );
};

DisplayUserData.propTypes = {
  panelBackgroundColor: propTypes.string.isRequired,
  firstName: propTypes.string.isRequired,
  lastName: propTypes.string.isRequired,
  country: propTypes.string.isRequired,
  city: propTypes.string.isRequired,
  age: propTypes.number.isRequired,
  lastLogin: propTypes.string,
  joinDate: propTypes.string,
  carsArray: propTypes.array.isRequired,
  receivedAwardsArray: propTypes.array.isRequired,
};

export default DisplayUserData;
