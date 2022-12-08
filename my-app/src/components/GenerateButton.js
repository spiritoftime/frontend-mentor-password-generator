import { useState } from "react";
import classes from "../css/generatebutton.module.css";
const GenerateButton = (props) => {
  const [isHover, setHover] = useState(false);
  return (
    <button
      className={classes.btn}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div onClick={props.setReset} className={classes.flex}>
        GENERATE AGAIN
        <svg
          className={classes.icon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 11.1 12"
        >
          <path
            fill={!isHover ? "#24232C" : "#a4ffaf"}
            d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
          ></path>
        </svg>
      </div>
    </button>
  );
};

export default GenerateButton;
