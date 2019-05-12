//USE {}
//https://stackoverflow.com/questions/15907052/trying-to-add-multiple-properties-to-javascript-object-using-a-loop#

let optimalUtilization = (capacity, fApps, bApps) => {
  let memoryObjects = [];
  let output = [];

  for (let i = 0; i < fApps.length; i++) {
    for (let j = 0; j < bApps.length; j++) {
      let usage = fApps[i][1] + bApps[j][1];
      let maxUsage;
      if (usage === capacity) {
        maxUsage = true;
      } else {
        maxUsage = false;
      }
      memoryObjects.push({
        id: [fApps[i][0], bApps[j][0]],
        usage: usage,
        max: maxUsage
      });
    }
  }

  let sortable = memoryObjects
    .sort((a, b) => {
      let compare = 0;
      if (a.max === true || b.max === true) {
        compare = 1;
      }
      return compare;
    })
    .reverse();

  for (device of sortable) {
    if (device.max) {
      output.push(device.id);
    }
  }
  return output;
};

console.log(optimalUtilization(7, [[1, 2], [2, 4], [3, 6]], [[1, 2]]));

console.log(
  optimalUtilization(
    10,
    [[1, 3], [2, 5], [3, 7], [4, 10]],
    [[1, 2], [2, 3], [3, 4], [4, 5]]
  )
);
