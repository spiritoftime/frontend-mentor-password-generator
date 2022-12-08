import React from "react";
import classes from "../css/strengthindicator.module.css";
import StrengthBar from "./StrengthBar";
const StrengthIndicator = ({ strength }) => {
  return (
    <div className={classes["strength-div"]}>
      <p>STRENGTH</p>
      <div className={classes["strengthbar-div"]}>
        <p>{strength}</p>
        <StrengthBar strength={strength}></StrengthBar>
        <StrengthBar strength={strength}></StrengthBar>
        <StrengthBar strength={strength}></StrengthBar>
        <StrengthBar strength={strength}></StrengthBar>
      </div>
    </div>
  );
};

export default StrengthIndicator;
