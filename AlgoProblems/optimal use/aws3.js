let optimalUtilization = (capacity, fApps, bApps) => {
  let deviceUsageList = [];

  for (let i = 0; i < fApps.length; i++) {
    for (let j = 0; j < bApps.length; j++) {
      let usage = fApps[i][1] + bApps[j][1];

      if (usage === capacity) {
        deviceUsageList.push({
          id: [fApps[i][0], bApps[j][0]],
          usage: usage,
          max: true
        });
      } else if (usage < capacity) {
        deviceUsageList.push({
          id: [fApps[i][0], bApps[j][0]],
          usage: usage,
          max: false
        });
      }
    }
  }

  let maxUsed = [];
  let minUsed = [];
  deviceUsageList.filter(device => {
    if (device.max === true) {
      maxUsed.push(device.id);
    } else if (device.max === false) {
      minUsed.push(device.id);
    }
  });
  return maxUsed.length > 0 ? maxUsed : minUsed.reverse()[0];
};

//console.log(optimalUtilization(7, [[1, 2], [2, 4], [3, 6]], [[1, 2]]));

console.log(
  optimalUtilization(
    10,
    [[1, 3], [2, 5], [3, 7], [4, 10]],
    [[1, 2], [2, 3], [3, 4], [4, 5]]
  )
);
