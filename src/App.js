import React, { Component } from "react";
import Classes from "./App.css";
import Person from "./Person/Person.js";
import Validate from "./ValidationComp";
import CharComp from "./CharComponent";

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
    let btnClass = "";

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.personAttr.map((personEl, i, _) => {
            return (
              <Person
                clickDel={() => this.deletePersonsHandler(i)}
                name={personEl.name}
                age={personEl.age}
                key={personEl.id}
                changed={(changeEvent) =>
                  this.nameChangeHandler(changeEvent, personEl.id)
                }
              />
            );
          })}
        </div>
      );

      btnClass = Classes.Green;
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

    const assignedClasses = [];

    if (this.state.personAttr.length <= 2) {
      assignedClasses.push(Classes.red); // ["red"]
    }
    if (this.state.personAttr.length <= 1) {
      assignedClasses.push(Classes.bold); // ["red", "bold"]
    }

    return (
      <div className={Classes.App}>
        <h1>Hi, I am a react developer</h1>
        <p className={assignedClasses.join(" ")}>
          This is a simple text below the header element
        </p>
        <button onClick={this.togglePersonsHandler} className={btnClass}>
          click to toggle Persons (on/off)
        </button>

        <hr />
        <input
          type="text"
          onChange={this.tChange}
          value={this.state.taskUserInput}
        />
        <p>{this.state.taskUserInput}</p>
        <Validate txtLength={this.state.taskUserInput.length}></Validate>

        {charCompInputs}

        {persons}
      </div>
    );
  }
}

export default App;
