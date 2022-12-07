import Checkboxes from "./components/Checkboxes";
import GenerateButton from "./components/GenerateButton";
import PasswordApp from "./components/PasswordApp";
import PasswordBar from "./components/PasswordBar";
import StrengthIndicator from "./components/StrengthIndicator";
import Text from "./components/Text";
import ShowPassword from "./components/ShowPassword";
import { useReducer } from "react";
import classes from "./css/app.module.css";

const checkboxes = [
  "Include Uppercase Letters",
  "Include Lowercase Letters",
  "Include Numbers",
  "Include Symbols",
];
function reducer(state, action) {
  return { ...state, ...action };
}
function App() {
  const passwordLengthHandler = (length) => {

  };
  const [isChecked, dispatchCheckBox] = useReducer(reducer, {
    0: false,
    1: false,
    2: false,
    3: false,
  });
  return (
    <PasswordApp>
      <Text></Text>
      <ShowPassword></ShowPassword>
      <div className={classes["toggle-div"]}>
        <PasswordBar getLength={passwordLengthHandler}></PasswordBar>
        <Checkboxes
          checkboxes={checkboxes}
          dispatchHandler={dispatchCheckBox}
        ></Checkboxes>
        <StrengthIndicator></StrengthIndicator>
        <GenerateButton></GenerateButton>
      </div>
    </PasswordApp>
  );
}

export default App;
