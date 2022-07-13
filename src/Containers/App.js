import React, { Component } from "react";
import Classes from "./App.css";
import Cockpit from "../Components/Cockpit/Cockpit";
import CharComps from "../Components/CharComps/CharComps";
import Persons from "../Components/Persons/Persons";

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

    return (
      <div className={Classes.App}>
        <Cockpit
          title = {this.props.title}
          showPersons={this.state.showPersons}
          personAttr={this.state.personAttr}
          togglePersonsHandler={this.togglePersonsHandler}
        />

        <CharComps
          taskUserInput={this.state.taskUserInput}
          inputDel={this.charCompInputsDel}
          tChange={this.tChange}
        />

        {persons}
      </div>
    );
  }
}

export default App;
