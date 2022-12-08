import Checkboxes from "./components/Checkboxes";
import GenerateButton from "./components/GenerateButton";
import PasswordApp from "./components/PasswordApp";
import PasswordBar from "./components/PasswordBar";
import StrengthIndicator from "./components/StrengthIndicator";
import Text from "./components/Text";
import ShowPassword from "./components/ShowPassword";
import { useCallback, useEffect, useReducer, useState } from "react";
import classes from "./css/app.module.css";

import passwordGenerator from "./generatePassword";

// import { symbols, uppercase, lowercase, numbers } from "./passwordsymbols";

// uppercase, lowercase, numebrs, symbol
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
  const [password, setPassword] = useState("P4$5W0rD!");
  const [isReset, setReset] = useState(false)
  const [passwordSpecifications, dispatch] = useReducer(reducer, {
    length: 0,
    Uppercase: false,
    Lowercase: false,
    Numbers: false,
    Symbols: false,
    
  });
  useEffect(() => {
    const newPassword = passwordGenerator(passwordSpecifications);

    setPassword(newPassword);
  }, [passwordSpecifications]);
  useEffect(()=>{
    if (isReset)setPassword(passwordGenerator(passwordSpecifications))
  },[isReset,passwordSpecifications])

  return (
    <PasswordApp>
      <div className={classes.text}>
        <Text></Text>
      </div>
      <ShowPassword password={password}></ShowPassword>
      <div className={classes["toggle-div"]}>
        <PasswordBar dispatchHandler={dispatch}></PasswordBar>
        <Checkboxes
          checkboxes={checkboxes}
          dispatchHandler={dispatch}
        ></Checkboxes>
        <StrengthIndicator></StrengthIndicator>
        <GenerateButton setReset={setReset}></GenerateButton>
      </div>
    </PasswordApp>
  );
}

export default App;
