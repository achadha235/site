import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import tailwindConfig from "../../tailwind.config";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: tailwindConfig.theme.colors.white,
    },
    secondary: {
      main: tailwindConfig.theme.colors.blue[700],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: ["Graphik", "sans-serif"].join(","),
    fontWeightRegular: 500,
  },
});

export default theme;
