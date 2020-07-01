import {makeStyles} from "@material-ui/core/styles";
import {materialColors} from "./MaterialColors";

export const GlobalStyles = makeStyles((it) => ({
  materialBlueBackground: {
    backgroundColor: it.palette.primary.main,
  },
  materialBlueFont: {
    color: it.palette.primary.main,
  },
  lightGreyBackground: {
    backgroundColor: materialColors.grey["700"]
  }
}));

export default GlobalStyles;
