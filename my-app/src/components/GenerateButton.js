import React from "react";
import classes from "../css/passwordbar.module.css";
const GenerateButton = () => {
  return (
    <button className={classes.btn}>
      GENERATE <span>&#8594;</span>
    </button>
  );
};

export default GenerateButton;
