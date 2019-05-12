let optimalUtilization = (
  deviceCapacity,
  foregroundAppList,
  backgroundAppList
) => {
  let exactOptimalUse = new Map();
  let closeOptimalUse = new Map();
  let output = [];

  for (let i = 0; i < foregroundAppList.length; i++) {
    for (j = 0; j < backgroundAppList.length; j++) {
      let optimalUse = foregroundAppList[i][1] + backgroundAppList[j][1];

      if (optimalUse === deviceCapacity) {
        exactOptimalUse.set(
          [foregroundAppList[i][0], backgroundAppList[j][0]],
          optimalUse
        );
      } else if (optimalUse < deviceCapacity) {
        closeOptimalUse.set(
          [foregroundAppList[i][0], backgroundAppList[j][0]],
          optimalUse
        );
      }
    }
  }

  if (exactOptimalUse.size >= 1) {
    let sortedDeviceMap = new Map(
      [...exactOptimalUse.entries()].sort().reverse()
    ).keys();
    output = Array.from(sortedDeviceMap);
  } else if (closeOptimalUse.size >= 1) {
    let closeSortedDeviceMap = new Map(
      [...closeOptimalUse.entries()].sort().reverse()
    ).keys();
    output = Array.from(closeSortedDeviceMap)[0];
  }

  return output;
};

console.log(optimalUtilization(7, [[1, 2], [2, 4], [3, 6]], [[1, 2]]));

// console.log(
//   optimalUtilization(
//     10,
//     [[1, 3], [2, 5], [3, 7], [4, 10]],
//     [[1, 2], [2, 3], [3, 4], [4, 5]]
//   )
// );

//Approach - O(n^2)
//https://stackoverflow.com/questions/31158902/is-it-possible-to-sort-a-es6-map-object#
//https://stackoverflow.com/questions/3298477/get-first-key-from-javascript-object
//https://stackoverflow.com/questions/32539354/how-to-get-the-first-element-of-set-in-es6-ecmascript-2015
//https://stackoverflow.com/questions/28718641/transforming-a-javascript-iterator-into-an-array
