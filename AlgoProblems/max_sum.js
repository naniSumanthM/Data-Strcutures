let maxSum = arr => {
  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    currentSum = Math.max(currentSum + currentNum, 0); //if both added is negative, take 0
    maxSum = Math.max(currentSum, maxSum); //current sum or previous maxSum
  }
  return maxSum;
};

console.log(maxSum([1, 2, 3]));
//currentSum = 2, 2+3 = 5, 5 + - 1 = 4, 4 + - 2 = 2
//maxSum = 2, 5, 5, 5

//https://medium.com/@IndiraWilliams/max-sub-array-sum-javascript-f1303f979344