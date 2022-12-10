import Checkboxes from "./components/Checkboxes";
import GenerateButton from "./components/GenerateButton";
import PasswordApp from "./components/PasswordApp";
import PasswordBar from "./components/PasswordBar";
import StrengthIndicator from "./components/StrengthIndicator";
import Text from "./components/Text";
import ShowPassword from "./components/ShowPassword";
import { useCallback, useEffect, useReducer, useState } from "react";
import classes from "./css/app.module.css";
import checkStrength from "./checkStrength";
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

  const [copied, setCopied] = useState(false);
  const [passwordStrength, setStrength] = useState("none");
  const [passwordSpecifications, dispatch] = useReducer(reducer, {
    length: 0,
    Uppercase: false,
    Lowercase: false,
    Numbers: false,
    Symbols: false,
  });
  // is there a way to manage all these useEffects?
  // recreate password when passwordSpecifications changed
  useEffect(() => {
    const newPassword = passwordGenerator(passwordSpecifications);
    setPassword(newPassword);
    setCopied(false);
  }, [passwordSpecifications]);
  // regenerate password when button is clicked
  const resetPassword = () => {
    const newPassword = passwordGenerator(passwordSpecifications);
    setPassword(newPassword);
    setCopied(false);
  };

  // check the strength of the password
  useEffect(() => {
    const strength = checkStrength(password, passwordSpecifications);
    setStrength(strength);
  }, [password, passwordSpecifications]);

  return (
    <PasswordApp>
      <div className={classes.text}>
        <Text></Text>
      </div>
      <ShowPassword
        setCopied={setCopied}
        copied={copied}
        password={password}
      ></ShowPassword>
      <div className={classes["toggle-div"]}>
        <PasswordBar dispatchHandler={dispatch}></PasswordBar>
        <Checkboxes
          checkboxes={checkboxes}
          dispatchHandler={dispatch}
        ></Checkboxes>
        <StrengthIndicator strength={passwordStrength}></StrengthIndicator>
        <GenerateButton resetPassword={resetPassword}></GenerateButton>
      </div>
    </PasswordApp>
  );
}

export default App;
