import React from "react";
import {Link} from "react-router-dom";
import {PR} from "../../../logic/Helper";
import {PATH_LOGIN, PATH_REGISTER} from "../../../config/constant/path-constants";
import strings from "../../../config/constant/string-constants";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AddBoxIcon from "@material-ui/icons/AddBox";
import porscheImage from "../../../assets/porsche911gt3rs.jpg";
import GlobalStyles from "../../../main/GlobalStyles";
import "../../../index.css";

export const HomePage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const globalStyles = GlobalStyles();

  const renderLeftSide = () => {

    const renderDescription = () => {
      return (
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-8 custom-font-size-1 text-justify font-weight-bold mb-3">
              <span className={globalStyles.materialBlueFont}>
                {strings.homePage.socialRacetrack + " "}
              </span>
              <span>
                {strings.homePage.siteIntroFirst + " "}
              </span>
              <span>
                {strings.homePage.siteIntroSecond}
              </span>
            </div>
          </div>
        </div>
      );
    };

    const renderImage = () => {
      return (
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-8">
              <Card variant="outlined">
                <CardMedia
                  component="img"
                  src={porscheImage}
                />
              </Card>
            </div>
          </div>
        </div>
      );
    };

    return (
      <div className="col-sm-6 text-center align-self-center mb-4">
        {renderDescription()}
        {renderImage()}
      </div>
    );
  };

  const renderRightSide = () => {

    const renderDescription = () => {
      return (
        <div className="mb-2">
          <div className={"custom-font-size-1-5 " + globalStyles.materialBlueFont}>
            {strings.homePage.registerLoginDescription}
          </div>
          <div className="custom-font-size-1">
            {strings.homePage.fastAndEasy}
          </div>
        </div>
      );
    };

    const renderButtons = () => {

      const renderSingleButton = (Component = PR(), redirectPath = PR(), text = PR()) => {
        return (
          <Link to={redirectPath}>
            <Card variant="outlined" className="mt-4">
              <span className="custom-font-size-7">
                <Component
                  fontSize="inherit"
                />
              </span>
              <Button
                color="primary"
                variant="contained"
                fullWidth
              >
                {text}
              </Button>
            </Card>
          </Link>
        );
      };

      return (
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-5">
              {renderSingleButton(AddBoxIcon, PATH_REGISTER, strings.homePage.registerNow)}
              {renderSingleButton(AccountBoxIcon, PATH_LOGIN, strings.homePage.loginNow)}
            </div>
          </div>
        </div>
      );
    };

    return (
      <div className="col-sm-6 text-center font-weight-bold mb-4">
        {renderDescription()}
        {renderButtons()}
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
