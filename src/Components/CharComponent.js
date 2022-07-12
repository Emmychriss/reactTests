import React from "react";

const charComp = (props) => {
  return <p style={props.style} onClick= {props.click}>{props.charComponent}</p>;
};

export default charComp;
