//https://www.geeksforgeeks.org/gcd-two-array-numbers/

let getGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGCD(num2, num1 % num2);
};

let findGCD = (arr, n) => {
  let result = arr[0];
  for (let i = 1; i < n; i++) {
    result = getGCD(arr[i], result);
  }
  return result;
};

console.log(findGCD([3, 6, 9, 12, 15], 5));
