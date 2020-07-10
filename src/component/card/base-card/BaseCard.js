import React, {Fragment} from "react";
import propTypes from "prop-types";
import {Link} from "react-router-dom";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import {PR} from "../../../logic/Helper";

export const BaseCard = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const renderSingleProperty = (key = PR(), value = PR()) => {
    return (
      <div className="text-dark">
        <FiberManualRecordIcon fontSize="inherit" className="mb-1"/>
        {key + ": "}
        <span className="text-nowrap">
          {value}
        </span>
      </div>
    );
  };

  const renderProperties = (propertiesArray = PR()) => {
    propertiesArray.map((it, index) => {
      return (
        <Fragment key={index}>
          {renderSingleProperty()}
        </Fragment>
      );
    });
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className={"card view overlay " + props.gridStyles}>
      <Link to={props.redirectPath} onClick={props.handleRedirect}>

        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img
          src={props.imagePath}
          className="card-img-top" alt="Image"
        />
        <div className="mask rgba-black-light"/>

        <div className="card-body">
          <h6 className={"font-weight-bold " + props.titleStyles}>
            {props.title}
          </h6>

          {renderProperties(props.propertiesArray)}
        </div>
      </Link>
    </div>
  );
};

BaseCard.propTypes = {
  gridStyles: propTypes.string.isRequired,
  redirectPath: propTypes.string.isRequired,
  handleRedirect: propTypes.func.isRequired,
  imagePath: propTypes.string.isRequired,
  titleStyles: propTypes.string,
  title: propTypes.string.isRequired,
  propertiesArray: propTypes.array.isRequired,
};

export default BaseCard;
