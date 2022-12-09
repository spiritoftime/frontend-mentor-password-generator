import React from "react";
import classes from "../css/passwordbar.module.css";
import { useState } from "react";
const PasswordBar = ({ dispatchHandler: dispatch }) => {
  const [number, setNumber] = useState(0);
  const toggleInputHandler = (e) => {
    // change the width of the green fill as we increase the length in the slider
    e.target.style.setProperty("--emptyVariable", `${e.target.value * 5}%`);

    const action = {};
    action.length = +e.target.value;
    dispatch(action);
    setNumber(e.target.value);
  };

  return (
    <div className={classes["flex-container"]}>
      <div className={classes["bar-description"]}>
        <label htmlFor="passwordLength">Character Length</label>
        <p className={classes.length}>{number}</p>
      </div>
      <input
        className={classes.input}
        id="passwordLength"
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
