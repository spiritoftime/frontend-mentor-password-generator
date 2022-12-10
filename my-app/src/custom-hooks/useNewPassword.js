import React from "react";
import { useEffect, useState } from "react";
import passwordGenerator from "../generatePassword";
const useNewPassword = (passwordSpecifications) => {
  const [password, setPassword] = useState("P4$5W0rD!");
  const [copied, setCopied] = useState(false);
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
  return { password, setCopied, copied, resetPassword };
};

export default useNewPassword;
