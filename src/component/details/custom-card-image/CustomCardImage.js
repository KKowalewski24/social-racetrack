import React from "react";
import propTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

export const CustomCardImage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className="col-sm-6 align-self-center mb-4">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10 col-xl-8">
            <Card variant="outlined">
              <CardMedia
                component="img"
                src={props.imageUrl}
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

CustomCardImage.propTypes = {
  imageUrl: propTypes.string,
};

export default CustomCardImage;
