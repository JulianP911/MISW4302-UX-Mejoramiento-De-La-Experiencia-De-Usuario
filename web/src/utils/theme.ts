import { createTheme } from "@mui/material";

const colorPallet = {
  primary: {
    main: "#546D92",
    "50": "#EFF2F6",
    "100": "#CED7E3",
    "200": "#AEBCD0",
    "300": "#8EA1BE",
    "400": "#6D86AB",
    "500": "#546D92",
    "600": "#415571",
    "700": "#2F3C51",
    "800": "#1C2431",
    "900": "#090C10",
  },
  secondary: {
    main: "#AC9EE1",
    "50": "#EEECF9",
    "100": "#CDC5ED",
    "200": "#AC9EE1",
    "300": "#8B77D%",
    "400": "#6A50C9",
    "500": "#5036AF",
    "600": "#3E2A88",
    "700": "#2C1E61",
    "800": "#1B123A",
    "900": "#090913",
  },
};

export const theme = createTheme({
  typography: {
    fontFamily: ["Inter Variable", "sans-serif"].join(","),
  },
  palette: colorPallet,
  colorSchemes: {
    light: {
      palette: colorPallet,
    },
    dark: {
      palette: colorPallet,
    },
  },
});
