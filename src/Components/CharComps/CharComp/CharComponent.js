import React from "react";
import Classes from "./CharComp.css";

const charComp = (props) => (
  <p style={Classes.CharcompStyle} onClick={props.click}>
    {props.charComponent}
  </p>
);
export default charComp;
