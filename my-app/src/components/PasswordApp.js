import React from "react";
import classes from "../css/app.module.css";
const PasswordApp = ({ children }) => {
  return <div className={classes["password_app"]}>{children}</div>;
};

export default PasswordApp;
