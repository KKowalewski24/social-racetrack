import React from "react";
import propTypes from "prop-types";
import {BrowserStorageController} from "../../../logic/controller/BrowserStorageController";
import {CHOSEN_MEMBER_ID} from "../../../config/constant/browser-storage-contants";
import {PR} from "../../../logic/Helper";
import {generatePropertiesArray} from "../CardHelper";
import BaseCard from "../base-card/BaseCard";
import userImage from "../../../assets/user-image.svg";

export const MemberCard = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const browserStorageController = new BrowserStorageController();

  const setChosenMember = () => {
    browserStorageController
      .sessionStorageSaveItem(CHOSEN_MEMBER_ID, props.memberObject.id);
  };

  const createPropertiesArray = (keysArray = PR(), memberObject = PR()) => {
    const chosenValueArray = [
      memberObject.country,
      memberObject.city
    ];

    return generatePropertiesArray(keysArray, chosenValueArray);
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <BaseCard
      gridStyles={props.gridStyles}
      redirectPath={props.redirectPath}
      handleRedirect={setChosenMember}
      imagePath={userImage}
      titleStyles={props.titleStyles}
      title={props.memberObject.firstName + " " + props.memberObject.lastName}
      propertiesArray={
        createPropertiesArray(props.memberPropertiesKeysArray, props.memberObject)
      }
    />
  );
};

MemberCard.propTypes = {
  gridStyles: propTypes.string.isRequired,
  redirectPath: propTypes.string.isRequired,
  titleStyles: propTypes.string.isRequired,
  memberObject: propTypes.object.isRequired,
  memberPropertiesKeysArray: propTypes.array.isRequired,
};

export default MemberCard;
