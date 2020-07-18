import React from "react";
import propTypes from "prop-types";
import {Link} from "react-router-dom";
import LetterAvatar from "../avatar/LetterAvatar";
import HorizontalContainer from "../../util/horizontal-container/HorizontalContainer";
import strings from "../../../config/constant/string-constants";
import Tooltip from "@material-ui/core/Tooltip";
import AddBoxIcon from "@material-ui/icons/AddBox";

export const DisplayUserAvatar = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <HorizontalContainer
      panelBackgroundColor={props.backgroundStyle}
      margin={"mt-4 mb-3"}
    >
      <div className="row justify-content-center">
        <div>
          <LetterAvatar
            fullname={props.firstName + " " + props.lastName}
            fontSize={110}
          />

          <Link to={props.avatarRedirectPath}>
            <Tooltip
              title={strings.accountPage.add + " " + strings.accountPage.car
              + " " + strings.accountPage.or + " " + strings.accountPage.award}
            >
              <AddBoxIcon
                fontSize="inherit"
                className={"custom-font-size-5 ml-5 " + props.addIconColor}
              />
            </Tooltip>
          </Link>
        </div>
      </div>
    </HorizontalContainer>
  );
};

DisplayUserAvatar.propTypes = {
  firstName: propTypes.string.isRequired,
  lastName: propTypes.string.isRequired,
  avatarRedirectPath: propTypes.string.isRequired,
  backgroundStyle: propTypes.string.isRequired,
  addIconColor: propTypes.string.isRequired,
};

export default DisplayUserAvatar;
