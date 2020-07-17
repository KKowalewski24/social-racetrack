import React from "react";
import propTypes from "prop-types";
import strings from "../../../config/constant/string-constants";
import HorizontalContainer from "../../util/horizontal-container/HorizontalContainer";
import Button from "@material-ui/core/Button";
import {formatDate, PR} from "../../../logic/Helper";
import "../../../index.css";

export const DisplayUserData = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const renderBoldText = (text = PR()) => {
    return (
      <div className="font-weight-bold mb-1">
        {text}
      </div>
    );
  };

  const renderHeaderTitle = (text = PR()) => {
    return (
      <div className="row justify-content-center mb-3">
        <div className="col-md-12 text-center font-weight-bold custom-font-size-1-5">
          <span>{text}</span>
        </div>
      </div>
    );
  };

  const renderUserInformation = () => {

    const renderLeftSide = () => {
      return (
        <div className="col-md-6 text-center">
          {renderBoldText(strings.accountPage.country + ": " + props.country)}
          {renderBoldText(strings.accountPage.city + ": " + props.city)}
          {
            props.joinDate ?
              renderBoldText(strings.accountPage.joinDate + ": " + props.joinDate)
              : null
          }
        </div>
      );
    };

    const renderRightSide = () => {
      return (
        <div className="col-md-6 text-center">
          {renderBoldText(strings.accountPage.birthDate + ": " + formatDate(props.birthDate))}
          {renderBoldText(strings.accountPage.email + ": " + props.email)}
          {
            props.lastLogin ?
              renderBoldText(strings.accountPage.lastLogin + ": " + props.lastLogin)
              : null
          }
        </div>
      );
    };

    return (
      <HorizontalContainer panelBackgroundColor={props.panelBackgroundColor} margin={"mt-3 mb-3"}>
        {renderHeaderTitle(strings.accountPage.name + ": " + props.firstName + " " + props.lastName)}

        <div className="row justify-content-center custom-font-size-1">
          {renderLeftSide()}
          {renderRightSide()}
        </div>
      </HorizontalContainer>
    );
  };

  const renderUserCars = () => {

    const renderHead = () => {
      return (
        <thead>
          <tr>
            <th>{strings.accountPage.brand}</th>
            <th>{strings.accountPage.model}</th>
            <th>{strings.accountPage.productionYear}</th>
            <th>{strings.accountPage.mileageInKilometers}</th>
            <th>{strings.accountPage.carType}</th>
            <th>{strings.accountPage.engineType}</th>
            <th>{strings.accountPage.enginePowerInHorsepower}</th>
            <th>{strings.accountPage.driveTrainType}</th>
            <th>{strings.accountPage.remove}</th>
          </tr>
        </thead>
      );
    };

    const renderBody = () => {
      return (
        <tbody>
          {
            props.carsArray && props.carsArray.map((it, index) => {
              return (
                <tr key={index}>
                  <td>{it.brand}</td>
                  <td>{it.model}</td>
                  <td>{it.productionYear}</td>
                  <td>{it.mileageInKilometers}</td>
                  <td>{it.carType}</td>
                  <td>{it.engineType}</td>
                  <td>{it.enginePowerInHorsepower}</td>
                  <td>{it.driveTrainType}</td>
                  <td>
                    <Button
                      onClick={() => props.handleRemoveCar(it.id)}
                      color="secondary"
                      variant="contained"
                      size="small"
                    >
                      {strings.accountPage.remove}
                    </Button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      );
    };

    return (
      <HorizontalContainer panelBackgroundColor={props.panelBackgroundColor} margin={"mt-3 mb-3"}>
        {renderHeaderTitle(strings.accountPage.cars)}

        <div className="row justify-content-center px-3">
          <table className="table table-responsive table-striped text-center w-auto custom-font-size-0-5 text-white">
            {renderHead()}
            {renderBody()}
          </table>
        </div>
      </HorizontalContainer>
    );
  };

  const renderUserAwards = () => {

    const renderHead = () => {
      return (
        <thead>
          <tr>
            <th>{strings.accountPage.description}</th>
            <th>{strings.accountPage.year}</th>
            <th>{strings.accountPage.remove}</th>
          </tr>
        </thead>
      );
    };

    const renderBody = () => {
      return (
        <tbody>
          {
            props.receivedAwardsArray && props.receivedAwardsArray.map((it, index) => {
              return (
                <tr key={index}>
                  <td>{it.description}</td>
                  <td>{it.year}</td>
                  <td>
                    <Button
                      onClick={() => props.handleRemoveAward(it.id)}
                      color="secondary"
                      variant="contained"
                      size="small"
                    >
                      {strings.accountPage.remove}
                    </Button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      );
    };

    return (
      <HorizontalContainer panelBackgroundColor={props.panelBackgroundColor} margin={"mt-3 mb-3"}>
        {renderHeaderTitle(strings.accountPage.awards)}

        <div className="row justify-content-center px-3">
          <table
            className="table table-responsive table-striped text-center
                        w-auto custom-font-size-0-5 text-white"
          >
            {renderHead()}
            {renderBody()}
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
  birthDate: propTypes.instanceOf(Date).isRequired,
  email: propTypes.string,
  lastLogin: propTypes.string,
  joinDate: propTypes.string,
  carsArray: propTypes.array.isRequired,
  receivedAwardsArray: propTypes.array.isRequired,
  handleRemoveCar: propTypes.func.isRequired,
  handleRemoveAward: propTypes.func.isRequired,
};

export default DisplayUserData;
