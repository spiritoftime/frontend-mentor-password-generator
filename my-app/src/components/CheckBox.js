import { useState } from "react";
import classes from "../css/checkbox.module.css";
const CheckBox = (props) => {
  const [isChecked, setChecked] = useState(false);
  const toggleCheckBoxHandler = (e) => {
    const action = {};
    action[props.id] = e.target.checked;
    setChecked(!isChecked);
    props.dispatchHandler(action);
  };
  return (
    <div className={classes.checkbox}>
      <input
        className={classes.input}
        type="checkbox"
        id={props.id}
        onClick={toggleCheckBoxHandler}
      ></input>
      <label htmlFor={props.id} className={classes.label}>
        {props.content}
      </label>
    </div>
  );
};

export default CheckBox;
