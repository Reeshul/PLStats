import React from "react";
import "./App.css";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Fixtures from "./containers/Fixtures";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fixtures />
    </ThemeProvider>
  );
}

export default App;
