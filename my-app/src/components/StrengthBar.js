import React from "react";
import classes from "../css/strengthbar.module.css";
const StrengthBar = ({ strength }) => {
  return (
    <div
      style={{
        backgroundColor:
          strength === "none"
            ? "white"
            : strength === "too weak"
            ? "#f64a4a"
            : strength === "weak"
            ? "#fb7c58"
            : strength === "medium"
            ? "#f8cd65"
            : strength === "strong"
            ? "#a4ffaf"
            : "white",
      }}
      className={classes["strength-display"]}
    ></div>
  );
};

export default StrengthBar;
