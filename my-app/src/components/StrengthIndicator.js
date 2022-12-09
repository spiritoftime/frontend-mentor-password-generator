import React from "react";
import classes from "../css/strengthindicator.module.css";
import { useEffect, useState } from "react";
import StrengthBar from "./StrengthBar";

const StrengthIndicator = ({ strength }) => {
  const [strengths, setStrengths] = useState(["none", "none", "none", "none"]);
  useEffect(() => {
    switch (strength) {
      case "too weak":
        setStrengths(["too weak", "none", "none", "none"]);

        break;
      case "weak":
        setStrengths(["weak", "weak", "none", "none"]);
        break;
      case "medium":
        setStrengths(["medium", "medium", "medium", "none"]);
        break;
      case "strong":
        setStrengths(["strong", "strong", "strong", "strong"]);
        break;
      default:
        break;
    }
  }, [strength]);
  return (
    <div className={classes["strength-div"]}>
      <p className={classes["strength"]}>STRENGTH</p>
      <div className={classes["strengthbar-div"]}>
        <p className={classes["strength-indicator"]}>{strength}</p>
        <div className={classes["strengthbar-div"]}>
          {strengths.map((strength, idx) => {
            return <StrengthBar key={idx} strength={strength}></StrengthBar>;
          })}
        </div>
      </div>
    </div>
  );
};

export default StrengthIndicator;
