import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppContextProvider } from "./context/AppContext";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </AppContextProvider>
  </React.StrictMode>
);
