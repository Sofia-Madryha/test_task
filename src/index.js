import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalStyle } from "./components/GlobalStyle";
import App from "./components/App";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    accent: "#E0E0E0",
    accent_bg: "#EEEBE7",
    white: "#FFFFFF",
    black: "#000000",
    border: "#6A6A6A"

  },
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
