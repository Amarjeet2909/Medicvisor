import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";

// Replace ReactDOM.render with createRoot
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);