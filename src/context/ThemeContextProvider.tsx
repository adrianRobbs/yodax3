import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";

type contextType = {
  children: React.ReactNode;
};

const theme = createTheme({
  typography: {
    fontFamily: ["Heebo", "Montserrat"].join(","),
    h1: {
      fontSize: "48px",
      fontWeight: "700",
      fontFamily: "Heebo",
    },
    h2: {
      fontSize: "36px",
      fontWeight: "700",
      fontFamily: "Heebo",
    },
    h3: {
      fontSize: "32px",
      fontWeight: "500",
      fontFamily: "Heebo",
    },
    h4: {
      fontSize: "24px",
      fontWeight: "700",
      fontFamily: "Heebo",
    },
    h6: {
      fontSize: "18px",
      fontWeight: "700",
      fontFamily: "Montserrat",
    },
    body1: {
      fontSize: "14px",
      fontWeight: "500",
      fontFamily: "Heebo",
      color: "#fff",
    },
    body2: {
      fontSize: "14px",
      fontWeight: "400",
    },
  },
  palette: {
    primary: {
      main: "#F81D79",
      light: "#F484B3",
      dark: "#BF1A5F",
    },
    secondary: {
      main: "#fff",
      light: "#A99C9C",
      dark: "#181515",
    },
  },
});

function ThemeContextProvider({ children }: contextType) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeContextProvider;
