let maxSum = arr => {
  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max((currentSum + arr[i]), 0); //if both added is negative, currentSum = 0
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
};

console.log(maxSum([2, 3, -1]));