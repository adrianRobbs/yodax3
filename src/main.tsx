import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ThemeContextProvider from "./context/ThemeContextProvider";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
