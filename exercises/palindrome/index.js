// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

let palindrome = str => {
  let reversedString = str
    .split("")
    .reverse()
    .join("");

  reversedString === str ? true : false
};

//Leetcode
let isPalindrome = (s) => {
  let strippedString = s.replace(/\W/g, '').toLowerCase()
  let reversedString = strippedString.split('').reverse().join('').toLowerCase()
  return strippedString == reversedString
};
//console.log(isPalindrome("A man, a plan, a canal: Panama"));

module.exports = palindrome;
