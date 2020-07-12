import React from "react";
import strings from "../../../config/constant/string-constants";
import porscheImage from "../../../assets/porsche911gt3rs.jpg";
import CardMedia from "@material-ui/core/CardMedia";
import GlobalStyles from "../../../main/GlobalStyles";
import "../../../index.css";
import Card from "@material-ui/core/Card";

export const HomePage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const globalStyles = GlobalStyles();

  const renderLeftSide = () => {
    return (
      <div className="col-sm-6 text-center">
        <div className="custom-font-size-1 font-weight-bold mb-3">
          <span className={globalStyles.materialBlueFont}>
            {strings.homePage.socialRacetrack + " "}
          </span>
          <span>
            {strings.homePage.siteIntroFirst + " "}
          </span>
          <span>
            {/*todo finish description*/}
            {strings.homePage.siteIntroSecond}
          </span>
        </div>

        <div>
          <Card variant="outlined">
            <CardMedia
              component="img"
              src={porscheImage}
            />
          </Card>
        </div>
      </div>
    );
  };

  const renderRightSide = () => {
    return (
      <div className="col-sm-6 text-center font-weight-bold">
        <div className={"custom-font-size-1-5 " + globalStyles.materialBlueFont}>
          {strings.homePage.registerLoginDescription}
        </div>
        <div className="custom-font-size-1">
          {strings.homePage.fastAndEasy}
        </div>
        {/*  TODO ADD redirect to register login*/}
      </div>
    );
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className="container-fluid custom-margin-top-2">
      <div className="row justify-content-center">
        {renderLeftSide()}
        {renderRightSide()}
      </div>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
