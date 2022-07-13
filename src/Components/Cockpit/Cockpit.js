import React from "react";

import Classes from "./Cockpit.css";

const cockpit = (props) => {
  const assignedClasses = [];

  let btnClass = "";
  if (props.showPersons) {
    btnClass = Classes.Green;
  }

  if (props.personAttr.length <= 2) {
    assignedClasses.push(Classes.red); // ["red"]
  }
  if (props.personAttr.length <= 1) {
    assignedClasses.push(Classes.bold); // ["red", "bold"]
  }

  return (
    <div className={Classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>
        This is a simple text below the header element
      </p>
      <button onClick={props.togglePersonsHandler} className={btnClass}>
        click to toggle Persons (on/off)
      </button>
      <hr />
    </div>
  );
};

export default cockpit;
