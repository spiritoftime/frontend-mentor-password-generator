import CheckBox from "./CheckBox";
import classes from "../css/checkboxes.module.css";
const Checkboxes = ({ dispatchHandler, checkboxes }) => {
  return (
    <div className={classes.checkbox}>
      {checkboxes.map((checkbox, idx) => {
        return (
          <CheckBox
            id={checkbox.split(" ")[1]}
            key={checkbox.split(" ")[1]}
            content={checkbox}
            dispatchHandler={dispatchHandler}
          ></CheckBox>
        );
      })}
    </div>
  );
};

export default Checkboxes;
