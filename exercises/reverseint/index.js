// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

let reverseInt = n => {
  let input = n.toString();
  let reverseNum = "";

  for (let i = input.length - 1; i >= 0; i--) {
    if (input[i] !== "-" && input[i] !== "0") {
      reverseNum += input[i];
    }
  }
  return parseInt(reverseNum);
};

module.exports = reverseInt;
