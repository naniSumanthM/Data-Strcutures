// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

let vowels = str => {
  let vowelCount = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  let cleanStr = str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  for (char of cleanStr) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }
  return vowelCount;
};

module.exports = vowels;
