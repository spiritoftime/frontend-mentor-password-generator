import Checkboxes from "./components/Checkboxes";
import GenerateButton from "./components/GenerateButton";
import PasswordApp from "./components/PasswordApp";
import PasswordBar from "./components/PasswordBar";
import StrengthIndicator from "./components/StrengthIndicator";
import Text from "./components/Text";
import ShowPassword from "./components/ShowPassword";
import { useReducer } from "react";
import classes from "./css/app.module.css";

import useNewPassword from "./custom-hooks/useNewPassword";
import useCheckStrength from "./custom-hooks/useCheckStrength";

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
  const [passwordSpecifications, dispatch] = useReducer(reducer, {
    length: 0,
    Uppercase: false,
    Lowercase: false,
    Numbers: false,
    Symbols: false,
  });

  const { password, setCopied, copied, resetPassword } = useNewPassword(
    passwordSpecifications
  );
  const { passwordStrength } = useCheckStrength(
    password,
    passwordSpecifications
  );
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
