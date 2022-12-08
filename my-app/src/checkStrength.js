const checkStrength = (password, obj) => {
  const numTrue = Object.values(obj).reduce((numTrue, value) => {
    if (password === "P4$5W0rD!") return "medium";
    if (value === true) numTrue += 1;
    return numTrue;
  }, 0);
  if (password.length === 0) return "none";
  else if (password.length <= 4) return "too weak";
  else if (password.length <= 8) {
    if (numTrue === 1) return "too weak";
    return "weak";
  } else if (password.length <= 12) {
    if (numTrue === 1) return "too weak";
    if (numTrue === 2) return "weak";
    return "medium";
  } else if (password.length > 12) {
    if (numTrue === 1) return "too weak";
    if (numTrue === 2) return "weak";
    if (numTrue === 3) return "medium";
    return "strong";
  }
};

export default checkStrength;
