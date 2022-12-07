import React from "react";
import classes from "../css/strengthindicator.module.css";
import StrengthBar from "./StrengthBar";
const StrengthIndicator = () => {
  return (
    <div className={classes["strength-div"]}>
      <p>STRENGTH</p>
      <div className={classes["strengthbar-div"]}>
        <p>MEDIUM</p>
        <StrengthBar></StrengthBar>
        <StrengthBar></StrengthBar>
        <StrengthBar></StrengthBar>
        <StrengthBar></StrengthBar>
      </div>
    </div>
  );
};

export default StrengthIndicator;
