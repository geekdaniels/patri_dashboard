import React from "react";
import ReactDOM from "react-dom";

import RouteWrapper from "./routers/routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <RouteWrapper />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
