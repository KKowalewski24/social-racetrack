import React from "react";
import propTypes from "prop-types";
import {Link} from "react-router-dom";
import LetterAvatar from "../avatar/LetterAvatar";
import {PATH_ACCOUNT_SETTINGS} from "../../../config/constant/path-constants";
import HorizontalContainer from "../../util/horizontal-container/HorizontalContainer";
import SettingsIcon from "@material-ui/icons/Settings";

export const DisplayUserAvatar = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <HorizontalContainer panelBackgroundColor={props.backgroundStyle}>
      <div className="row justify-content-center">
        <div>
          <LetterAvatar
            fullname={props.firstName + " " + props.lastName}
            fontSize={110}
          />

          <Link to={PATH_ACCOUNT_SETTINGS}>
            <SettingsIcon
              fontSize="inherit"
              className={"custom-font-size-5 ml-5 " + props.settingsColor}
            />
          </Link>
        </div>
      </div>
    </HorizontalContainer>
  );
};

DisplayUserAvatar.propTypes = {
  firstName: propTypes.string.isRequired,
  lastName: propTypes.string.isRequired,
  backgroundStyle: propTypes.string.isRequired,
  settingsColor: propTypes.string.isRequired,
};

export default DisplayUserAvatar;
