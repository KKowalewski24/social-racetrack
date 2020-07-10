import React from "react";
import Paper from "@material-ui/core/Paper";

export const TabPanel = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <Paper variant="outlined">
      <div className="d-flex justify-content-center">
        {props.children}
      </div>
    </Paper>
  );
};

TabPanel.propTypes = {};

export default TabPanel;
