import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Containers/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <App title="Person Manager" />,
  document.getElementById("root")
);
registerServiceWorker();
