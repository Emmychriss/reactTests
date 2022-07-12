import React, { Component } from "react";
import Classes from "./App.css";
import Persons from "../Components/Persons/Persons";
import Validate from "../Components/ValidationComp";
import CharComp from "../Components/CharComponent";
import Cockpit from "../Components/Cockpit/Cockpit";

class App extends Component {
  state = {
    personAttr: [
      { id: "dhfhi2", name: "mr x", age: 99 },
      { id: "dhf88", name: "Lawerence", age: 26 },
      { id: "dfh09", name: "Michael", age: 34 },
    ],
    otherState: "This is another state",
    taskStates: [{ name: "Blake" }, { name: "Tony" }, { name: "Hannah" }],
    showPersons: false,
    taskUserInput: "",
  };

  btnClickHandler = (newName) => {
    this.setState({
      personAttr: [
        { name: newName, age: 20 },
        { name: "Lawerence", age: 46 },
        { name: newName, age: 54 },
        // the remaining obj properties will be merged
      ],
    });
  };

  togglePersonsHandler = () => {
    const isShow = this.state.showPersons;
    this.setState({ showPersons: !isShow });
  };

  nameChangeHandler = (e, id) => {
    e.preventDefault();

    const personIndex = this.state.personAttr.findIndex((p) => {
      return p.id === id;
    });

    const singlePerson = { ...this.state.personAttr[personIndex] };
    singlePerson.name = e.target.value; // resetting the personAttr to onChange input

    const persons = [...this.state.personAttr];
    persons[personIndex] = singlePerson;

    this.setState({
      personAttr: persons,
    });
  };

  deletePersonsHandler = (personIndex) => {
    const persons = this.state.personAttr;
    persons.splice(personIndex, 1);
    this.setState({
      personAttr: persons,
    });
  };

  tChange = (el) => {
    this.setState({
      taskUserInput: el.target.value,
    });
  };

  charCompInputsDel = (event, index) => {
    const inputCompsArr = this.state.taskUserInput.split("");
    inputCompsArr.splice(index, 1);

    const newInputs = inputCompsArr.join("");
    // console.log(newInputs);

    this.setState({
      taskUserInput: newInputs,
    });
  };

  render() {
    const outputStyle = {
      border: "5px solid black",
      backgroundColor: "white",
    };

    const charcompStyle = {
      display: "inline-block",
      padding: "16px",
      textAlign: "center",
      margin: "16px",
      border: "1px solid black",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          personAttr={this.state.personAttr}
          clickDel={this.deletePersonsHandler}
          nameChange={this.nameChangeHandler}
        />
      );
    }

    const charCompInputs = this.state.taskUserInput.split("").map((el, i) => {
      return (
        <CharComp
          key={i}
          style={charcompStyle}
          charComponent={el}
          click={(charCompEvnt) => {
            this.charCompInputsDel(charCompEvnt, i);
          }}
        />
      );
    });

    return (
      <div className={Classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          personAttr={this.state.personAttr}
          togglePersonsHandler={this.togglePersonsHandler}
          tChange={this.tChange}
          taskUserInput={this.state.taskUserInput}
        />

        <Validate txtLength={this.state.taskUserInput.length}></Validate>

        {charCompInputs}

        {persons}
      </div>
    );
  }
}

export default App;