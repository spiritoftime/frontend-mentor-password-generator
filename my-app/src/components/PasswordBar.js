import React from "react";
import classes from "../css/passwordbar.module.css";
import { useState } from "react";
const PasswordBar = ({ dispatchHandler: dispatch }) => {
  const [number, setNumber] = useState(0);
  const toggleInputHandler = (e) => {
    // const inputFill = window.getComputedStyle(e.target, "::after");
    // console.log(inputFill);
    e.target.style.setProperty("--emptyVariable", `${e.target.value * 5}%`);
    // inputFill.width = `${e.target.value * 10}%`;
    const action = {};
    action.length = +e.target.value;
    dispatch(action);
    setNumber(e.target.value);
  };
  // define a function here to get the number in the input
  return (
    <div className={classes["flex-container"]}>
      <div className={classes["bar-description"]}>
        <p>Character Length</p>
        <p className={classes.length}>{number}</p>
      </div>
      <input
        className={classes.input}
        type="range"
        name="length"
        min="0"
        max="20"
        step="1"
        value={number}
        onChange={toggleInputHandler}
      />
    </div>
  );
};

export default PasswordBar;
