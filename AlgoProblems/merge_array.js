let mergeSortedArrays = (array1, array2) => {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
};

let retSmallestNum = (arr1, arr2) => {
  let smallestArr1 = arr1[0];
  let smallestArr2 = arr2[0];

  if (smallestArr1 < smallestArr2) {
    return arr1.shift();
  } else {
    return arr2.shift();
  }
};

let mergeSortedArrays2 = (arr1, arr2) => {
  let sortedArray = [];
  let smallestNum;
  while (arr1.length != 0 && arr2.length != 0) {
    smallestNum = retSmallestNum(arr1, arr2);
    sortedArray.push(smallestNum);
  }
  return sortedArray.concat(arr1).concat(arr2);
};

console.log(mergeSortedArrays2([1, 6, 7], [2, 4, 6]));

//console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]));
