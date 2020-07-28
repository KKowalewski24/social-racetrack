import React from "react";
import propTypes from "prop-types";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import TabPanel from "../../util/tab-panel/TabPanel";

export const TabPanelSingleButton = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <TabPanel>
      <Link to={props.redirectPath} className="custom-color-inherit">
        <Button
          color="primary"
          variant="contained"
          className="my-1 mx-1"
        >
          {props.buttonTextContent}
        </Button>
      </Link>
    </TabPanel>
  );
};

TabPanelSingleButton.propTypes = {
  redirectPath: propTypes.string.isRequired,
  buttonTextContent: propTypes.string.isRequired,
};

export default TabPanelSingleButton;
