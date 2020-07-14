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
  },
  greenBackground500: {
    backgroundColor: materialColors.green["500"]
  },
  greenFont500: {
    color: materialColors.green["500"]
  }
}));

export default GlobalStyles;
