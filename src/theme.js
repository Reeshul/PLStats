import { createTheme } from "@material-ui/core/styles";

// colors
const appColors = {
  purple: "#37003C",
  lightBlue: "#61DAFB",
  darkBlue: "#282C34",
  black: "#2F2F2F",
  white: "#FFFFF",
  lightGray: "#E5E5E5",
  darkGray: "#EFEFEF",
};

// fonts
const appFonts = {
  Regular: "Regular, sans-serif",
  Bold: "Bold, sans-serif",
};

const theme = createTheme({
  // Customize MU theme properties here;
  // check default theme here https://material-ui.com/customization/default-theme/#default-theme;
  palette: {
    common: {
      purple: appColors.purple,
      lightBlue: appColors.lightBlue,
      darkBlue: appColors.darkBlue,
      black: appColors.black,
      white: appColors.white,
      lightGray: appColors.lightGray,
      darkGray: appColors.darkGray,
    },
    primary: {
      main: appColors.lightBlue,
    },
    secondary: {
      main: appColors.darkGray,
    },
    text: {
      primary: appColors.black,
      secondary: appColors.white,
    },
  },
  typography: {
    fontFamily: appFonts.Bold,
    h1: {
      fontFamily: appFonts.Bold,
    },
    h2: {
      fontFamily: appFonts.Bold,
    },
    h3: {
      fontFamily: appFonts.Bold,
    },
    h4: {
      fontFamily: appFonts.Bold,
    },
    h5: {
      fontFamily: appFonts.Bold,
    },
    h6: {
      fontFamily: appFonts.Bold,
    },
    subtitle1: {
      fontFamily: appFonts.Bold,
    },
    subtitle2: {
      fontFamily: appFonts.Regular,
    },
    body1: {
      fontFamily: appFonts.Regular,
    },
    body2: {
      fontFamily: appFonts.Bold,
    },
    button: {
      fontFamily: appFonts.Bold,
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1.5rem",
      fontSize: "1.3rem",
      lineHeight: "1.1",
      fontWeight: 400,
      textTransform: "inherit",
      cursor: "pointer",
      border: 0,
      borderRadius: 4,
    },
    caption: {
      fontFamily: appFonts.Regular,
    },
    overline: {
      fontFamily: appFonts.Bold,
      margin: 0,
      padding: "0.5rem 1rem",
      fontSize: "1.3rem",
      lineHeight: "1.1",
      fontWeight: 400,
      textTransform: "inherit",
      textAlign: "center",
    },
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        subtitle1: "h4",
        subtitle2: "time",
        body1: "p",
        body2: "span",
        button: "button",
        overline: "time",
      },
    },
  },
});

export default theme;
