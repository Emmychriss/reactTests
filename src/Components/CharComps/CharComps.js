import React from "react";
import Classes from "./CharComp/CharComp.css"
import CharComp from "./CharComp/CharComponent";
import Validate from "../ValidationComp";

const charCompInputs = (props) => {
  props.taskUserInput.split("").map((el, i, _) => {
    return (
      <div className= {Classes.CharcompStyle}>
        <input
          type="text"
          onChange={(event) => props.tChange(event)}
          value={props.taskUserInput}
        />

        <p>{props.taskUserInput}</p>

        <Validate txtLength={props.taskUserInput.length}></Validate>

        <CharComp
          key={i}
          charComponent={el}
          click={(charCompEvnt) => {
            // return props.inputDel(charCompEvnt, i);
            console.log("input found");
          }}
        />
      </div>
    );
  });
};

export default charCompInputs;
