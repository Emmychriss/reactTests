import React, { Component } from "react";
import Classes from "./Person.css";
import Aux from "../../../higherOrderComps/Auxilliary";
import AuthContext from "../../../context/auth-context";
import withClass from "../../../higherOrderComps/withClass";

class Person extends Component {
  constructor(props) {
    super(props);

    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    const fiveYears = 5;

    console.log("[person.js] is rendering...");
    return (
      <Aux>
        {this.context.authenticated ? (
          <p>Authenticated</p>
        ) : (
          <p>Please Log in</p>
        )}

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

export default withClass(Person, Classes.Person);
