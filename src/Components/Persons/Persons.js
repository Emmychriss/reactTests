import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps");
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[persons.js] shouldComponentUpdate ");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[persons.js] getSnapshotBeforeUpdate ");
    return null;
  }

  render() {
    console.log("[persons.js] is rendering...");
    return this.props.personAttr.map((personEl, i, _) => {
      return (
        <Person
          clickDel={() => this.props.clickDel(i)}
          name={personEl.name}
          age={personEl.age}
          key={personEl.id}
          changed={(changeEvent) =>
            this.props.nameChange(changeEvent, personEl.id)
          }
        />
      );
    });
  }

  componentDidUpdate() {
    console.log("[Person.js] componentDidUpdate");
  }
}

export default Persons;
