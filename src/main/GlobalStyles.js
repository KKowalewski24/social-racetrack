import {makeStyles} from "@material-ui/core/styles";
import {materialColors} from "./MaterialColors";

export const GlobalStyles = makeStyles((it) => ({
  materialBlueBackground: {
    backgroundColor: it.palette.primary.main,
  },
  materialBlueFont: {
    color: it.palette.primary.main,
  },
  greyBackground700: {
    backgroundColor: materialColors.grey["700"]
  },
  greyFont100: {
    color: materialColors.grey["100"]
  }
}));

export default GlobalStyles;
