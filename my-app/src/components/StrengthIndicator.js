import React from "react";
import classes from "../css/strengthindicator.module.css";
import StrengthBar from "./StrengthBar";
const StrengthIndicator = ({ strength }) => {
  return (
    <div className={classes["strength-div"]}>
      <p className={classes["strength"]}>STRENGTH</p>
      <div className={classes["strengthbar-div"]}>
        <p className={classes["strength-indicator"]}>{strength}</p>
        <div className={classes["strengthbar-div"]}>
          <StrengthBar strength={strength}></StrengthBar>
          <StrengthBar strength={strength}></StrengthBar>
          <StrengthBar strength={strength}></StrengthBar>
          <StrengthBar strength={strength}></StrengthBar>
        </div>
      </div>
    </div>
  );
};

export default StrengthIndicator;
