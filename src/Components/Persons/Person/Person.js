import React, { Component } from "react";
import Classes from "./Person.css";

class Person extends Component {
  render() {
    const fiveYears = 5;

    console.log("[person.js] is rendering...");
    return (
      <div className={Classes.Person}>
        <p onClick={this.props.clickDel}>
          I'm {this.props.name} and i am {this.props.age} years old of age. But
          in about {fiveYears} years time, I would be{" "}
          {+this.props.age + fiveYears} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
