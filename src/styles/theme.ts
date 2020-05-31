import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import tailwindConfig from "../../tailwind.config";

const theme = createMuiTheme({
  palette: {
    text: {
      primary: tailwindConfig.theme.colors.white,
      secondary: tailwindConfig.theme.colors.gray[900],
      disabled: tailwindConfig.theme.colors.white,
      hint: tailwindConfig.theme.colors.white,
    },
    primary: {
      main: tailwindConfig.theme.colors.black,
    },
    secondary: {
      main: tailwindConfig.theme.colors.blue[700],
    },
    background: {
      default: tailwindConfig.theme.colors.black,
      paper: tailwindConfig.theme.colors.black,
    },
  },
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
    fontWeightRegular: 500,
    button: {
      textTransform: "none",
    },
  },
  overrides: {
    MuiTextField: {
      root: {
        border: `solid 1px ${tailwindConfig.theme.colors.white}`,
        borderRadius: 5,
      },
    },
  },
});

export default theme;
