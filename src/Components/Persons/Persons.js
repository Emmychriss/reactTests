import React from "react";
import Person from "./Person/Person";

const persons = (props) =>
  props.personAttr.map((personEl, i, _) => {
    return (
      <Person
        clickDel={() => props.clickDel(i)}
        name={personEl.name}
        age={personEl.age}
        key={personEl.id}
        changed={(changeEvent) => props.nameChange(changeEvent, personEl.id)}
      />
    );
  });

export default persons;
