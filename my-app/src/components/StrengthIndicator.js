import React from "react";
import classes from "../css/strengthindicator.module.css";
const StrengthIndicator = () => {
  return (
    <div className={classes["strength-div"]}>
      <p>STRENGTH</p>
      <p>MEDIUM</p>
      <div className={classes["strength-display"]}></div>
      <div className={classes["strength-display"]}></div>
      <div className={classes["strength-display"]}></div>
      <div className={classes["strength-display"]}></div>
    </div>
  );
};

export default StrengthIndicator;
