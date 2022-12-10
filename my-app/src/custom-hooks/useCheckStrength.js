import React from "react";
import { useEffect, useState } from "react";
import passwordGenerator from "../generatePassword";
import checkStrength from "../checkStrength";
const useCheckStrength = (password, passwordSpecifications) => {
  const [passwordStrength, setStrength] = useState("none");

  // check the strength of the password
  useEffect(() => {
    const strength = checkStrength(password, passwordSpecifications);
    setStrength(strength);
  }, [password, passwordSpecifications]);

  return { passwordStrength };
};

export default useCheckStrength;
