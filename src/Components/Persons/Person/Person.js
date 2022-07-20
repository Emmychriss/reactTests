import React, { Component } from "react";
import Classes from "./Person.css";

import Aux from "../../../higherOrderComps/Auxilliary";

class Person extends Component {
  constructor(props) {
    super(props);

    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    const fiveYears = 5;

    console.log("[person.js] is rendering...");
    return (
      <Aux>
        {this.props.isAuth ? <p>Authenticated</p> : <p>False</p>}
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
          ref={this.inputElementRef}
        />
      </Aux>
    );
  }
}

export default Person;
