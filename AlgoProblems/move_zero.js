let moveZeros = arr => {
  //non-zero element count
  let count = 0;

  //move all non-zero elements to the front
  //If element encountered is non-zero,
  //then replace the element at index 'count' with this element
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count++] = arr[i];
    }
  }

  // Now all non-zero elements have been shifted to the front
  // 'count' is set as index of first 0.
  // Make all elements 0 from count to end.
  while (count < arr.length) {
    arr[count++] = 0;
  }
  return arr;
};

console.log(moveZeros([0, 1, 0, 2, 3, 0, 4, 0]));
