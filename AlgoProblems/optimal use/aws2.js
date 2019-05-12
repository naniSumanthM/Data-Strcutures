//USE {}
//https://stackoverflow.com/questions/15907052/trying-to-add-multiple-properties-to-javascript-object-using-a-loop#

let optimalUtilization = (capacity, fApps, bApps) => {
  let exactCapacity = [];
  let closeCapacity = [];
  let output = [];

  for (let i = 0; i < fApps.length; i++) {
    for (let j = 0; j < bApps.length; j++) {
      let usage = fApps[i][1] + bApps[j][1];
      if (usage === capacity) {
        exactCapacity.push({
          id: [fApps[i][0], bApps[j][0]],
          usage: usage
        });
      } else if (usage < capacity) {
        closeCapacity.push({
          id: [fApps[i][0], bApps[j][0]],
          usage: usage
        });
      }
    }
  }
  if (exactCapacity.length >= 1) {
    for (let i = 0; i < exactCapacity.length; i++) {
      output.push(exactCapacity[i].id);
    }
  } else if (closeCapacity.length >= 1) {
    output.push(closeCapacity.reverse()[0].id);
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
