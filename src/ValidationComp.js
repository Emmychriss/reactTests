import React from "react";

const validate = (props) => {
  let msg = "Text is short";

  if (props.txtLength > 5) {
    msg = "Text long enough!!";
  }

  return <p>{msg}</p>;
};

export default validate;
