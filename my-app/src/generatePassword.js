function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
export default function passwordGenerator(
  obj = {
    length: 0,
    Uppercase: false,
    Lowercase: false,
    Numbers: false,
    Symbols: false,
  }
) {
  const { length, Uppercase, Lowercase, Numbers, Symbols } = obj;
  const numTrue = Object.values(obj).reduce((numTrue, value) => {
    if (value === true) numTrue += 1;
    return numTrue;
  }, 0);
  // how do i improve this code?
  if (numTrue === 0 || length === 0) return "P4$5W0rD!";
  let generatedPassword = "";

  for (let i = 0; i < length; i += numTrue) {
    if (Numbers) {
      generatedPassword += getRandomNumber();
    }
    if (Uppercase) {
      generatedPassword += getRandomUpper();
    }
    if (Symbols) {
      generatedPassword += getRandomSymbol();
    }
    if (Lowercase) {
      generatedPassword += getRandomLower();
    }
  }
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}
