import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import createPalette from "@material-ui/core/styles/createPalette";
import createTypography from "@material-ui/core/styles/createTypography";
import { Shape } from "@material-ui/core/styles/shape";
import { Overrides } from "@material-ui/core/styles/overrides";

const palette = createPalette({
  background: {
    default: "#FFFFFF",
  },
  text: {
    primary: "#000000",
    secondary: "#C4C4C4",
  },
  primary: {
    main: "#54C278",
    light: "rgba(84, 194, 120, 0.09)",
  },
  type: "light",
});

const typography = createTypography(palette, {
  h1: {
    fontSize: "30px",
    fontWeight: "bold",
    textAlign: "center",
  },
  h2: {
    fontSize: "14px",
    textAlign: "center",
    fontWeight: "bold",
  },
  h3: {
    fontSize: "30px",
    fontWeight: "bold",
    color: palette.primary.main,
  },
  body1: {
    fontSize: "20px",
  },
  button: {
    textTransform: "none",
  },
});

const shape: Shape = {
  borderRadius: 4,
};

const overrides: Overrides = {
  MuiCssBaseline: {
    "@global": {
      [["h1", "h2", "h3", "h4", "h5", "h6", "p span"].join(" span, ")]: {
        color: palette.primary.main,
      },
    },
  },
  MuiLink: {
    root: {
      color: "black",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: 15,
      "&:hover": {
        color: palette.primary.main,
      },
    },
    underlineHover: {
      "&:hover": {
        textDecoration: "none",
      },
    },
  },
  MuiIconButton: {
    root: {
      color: palette.primary.main,
    },
  },
};

const theme = responsiveFontSizes(
  createMuiTheme({
    palette,
    typography,
    shape,
    overrides,
  })
);

export { theme as default, theme };
