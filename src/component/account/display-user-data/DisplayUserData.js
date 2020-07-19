import React from "react";
import propTypes from "prop-types";
import strings from "../../../config/constant/string-constants";
import HorizontalContainer from "../../util/horizontal-container/HorizontalContainer";
import AccountTable from "../account-table/AccountTable";
import {formatDate, PR} from "../../../logic/Helper";
import Button from "@material-ui/core/Button";
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
        <div className="col-md-12 text-center font-weight-bold custom-font-size-1-5 custom-prevent-overflow">
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
            props.isEditableForUser && props.joinDate ?
              renderBoldText(strings.accountPage.joinDate + ": " + props.joinDate)
              : null
          }
        </div>
      );
    };

    const renderRightSide = () => {
      return (
        <div className="col-md-6 text-center">
          {renderBoldText(strings.accountPage.birthDate + ": " + formatDate(new Date(props.birthDate)))}
          {renderBoldText(strings.accountPage.email + ": " + props.email)}
          {
            props.isEditableForUser && props.lastLogin ?
              renderBoldText(strings.accountPage.lastLogin + ": " + props.lastLogin)
              : null
          }
        </div>
      );
    };

    return (
      <HorizontalContainer
        panelBackgroundColor={props.panelBackgroundColor}
        margin={props.margin}
      >
        {renderHeaderTitle(props.firstName + " " + props.lastName)}

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
            {
              props.isEditableForUser ?
                <th>{strings.accountPage.remove}</th>
                : null
            }
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
                  {
                    props.isEditableForUser ?
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
                      : null
                  }
                </tr>
              );
            })
          }
        </tbody>
      );
    };

    return (
      <AccountTable
        panelBackgroundColor={props.panelBackgroundColor}
        margin={props.margin}
        renderTitle={() => renderHeaderTitle(strings.accountPage.cars)}
        renderHead={renderHead}
        renderBody={renderBody}
      />
    );
  };

  const renderUserAwards = () => {

    const renderHead = () => {
      return (
        <thead>
          <tr>
            <th>{strings.accountPage.description}</th>
            <th>{strings.accountPage.year}</th>
            {
              props.isEditableForUser ?
                <th>{strings.accountPage.remove}</th>
                : null
            }
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
                  {
                    props.isEditableForUser ?
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
                      : null
                  }
                </tr>
              );
            })
          }
        </tbody>
      );
    };

    return (
      <AccountTable
        panelBackgroundColor={props.panelBackgroundColor}
        margin={props.margin}
        renderTitle={() => renderHeaderTitle(strings.accountPage.awards)}
        renderHead={renderHead}
        renderBody={renderBody}
      />
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

/**
 * When `isEditableForUser` is passed or set to true below props must be also passes
 * lastLogin: propTypes.string,
 * joinDate: propTypes.string,
 * handleRemoveCar: propTypes.func,
 * handleRemoveAward: propTyp
 *
 * Remember that if props is not passed then its value is false
 *
 */
DisplayUserData.propTypes = {
  panelBackgroundColor: propTypes.string.isRequired,
  margin: propTypes.string.isRequired,
  firstName: propTypes.string.isRequired,
  lastName: propTypes.string.isRequired,
  country: propTypes.string.isRequired,
  city: propTypes.string.isRequired,
  birthDate: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  carsArray: propTypes.array.isRequired,
  receivedAwardsArray: propTypes.array.isRequired,
  isEditableForUser: propTypes.bool,
  lastLogin: propTypes.string,
  joinDate: propTypes.string,
  handleRemoveCar: propTypes.func,
  handleRemoveAward: propTypes.func,
};

export default DisplayUserData;
