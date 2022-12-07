import CheckBox from "./CheckBox";
import classes from "../css/checkboxes.module.css";
const Checkboxes = ({ dispatchHandler, checkboxes }) => {
  return (
    <div className={classes.checkbox}>
      {checkboxes.map((checkbox, idx) => {
        return (
          <CheckBox
            id={idx}
            key={idx}
            content={checkbox}
            dispatchHandler={dispatchHandler}
          ></CheckBox>
        );
      })}
    </div>
  );
};

export default Checkboxes;
