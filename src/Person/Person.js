import React from "react";
import "./Person.css";

const fiveYears = 5;

const person = (props) => {

  return (
    <div className="Person">
      <p onClick={props.clickDel}>
        I'm {props.name} and i am {props.age} years old of age. But in about{" "}
        {fiveYears} years time, I would be {+props.age + fiveYears} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
