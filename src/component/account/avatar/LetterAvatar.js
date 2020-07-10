import React, {useEffect, useState} from "react";
import propTypes from "prop-types";
import Avatar from "react-avatar";
import {PR} from "../../../logic/Helper";

export const LetterAvatar = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const [color, setColor] = useState("");

  const colorsArray = [
    "#ffeb3b",
    "#ffc107",
    "#ff9800",
    "#ff5722",
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
  ];

  const getRandomNumber = (begin = PR(), end = PR()) => {
    const min = Math.ceil(begin);
    const max = Math.floor(end);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomColor = () => {
    return colorsArray[getRandomNumber(0, colorsArray.length)];
  };

  useEffect(() => {
    setColor(getRandomColor());
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <Avatar
      color={color}
      name={props.fullname}
      size={props.fontSize}
      round={true}
    />
  );
};

LetterAvatar.propTypes = {
  fullname: propTypes.string.isRequired,
  fontSize: propTypes.number.isRequired,
};

export default LetterAvatar;
