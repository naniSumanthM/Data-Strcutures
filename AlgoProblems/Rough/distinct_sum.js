let getDistinctSum = array => {
  let previous = array[0];
  let sum = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] <= previous) {
      previous = previous + 1;
      sum = sum + previous;
    } else {
      sum = sum + array[i];
      previous = array[i];
    }
  }
  return sum;
};

console.log(getDistinctSum([4, 2, 2, 4, 5]));
