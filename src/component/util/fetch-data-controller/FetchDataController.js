import React from "react";
import propTypes from "prop-types";
import ErrorMessage from "../error-message/ErrorMessage";
import LinearProgress from "@material-ui/core/LinearProgress";

/* Sample usage of axios get to copy and redone
----------------------------------------------------------------
const [data, setData] = useState();
const [isLoaded, setIsLoaded] = useState(false);
const [isError, setIsError] = useState(false);

useEffect(() => {
  axios.get(LINK, {
    params: {

    }
  })
    .then((res) => {
      setData(res.data);
      setIsLoaded(true);
      setIsError(false);
    })
    .catch((err) => {
      setIsLoaded(true);
      setIsError(true);
    });
}, []);
----------------------------------------------------------------
*/

export const FetchDataController = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/

  /*------------------------ RETURN REGION ------------------------*/
  if (props.isLoaded) {
    if (!props.isError) {
      return (
        props.children
      );
    } else {
      return (
        <ErrorMessage
          title={props.errorMessageTitle}
          description={props.errorMessageDescription}
          redirectPath={props.errorMessageRedirectPath}
          redirectDescription={props.errorMessageRedirectDescription}
          styles={props.errorMessageStyles}
        />
      );
    }
  } else {
    return (
      <LinearProgress
        variant="query"
        color="secondary"
      />
    );
  }
};

FetchDataController.propTypes = {
  isLoaded: propTypes.bool.isRequired,
  isError: propTypes.bool.isRequired,
  errorMessageTitle: propTypes.string.isRequired,
  errorMessageDescription: propTypes.string.isRequired,
  errorMessageRedirectPath: propTypes.string.isRequired,
  errorMessageRedirectDescription: propTypes.string.isRequired,
  errorMessageStyles: propTypes.string.isRequired,
};

export default FetchDataController;
