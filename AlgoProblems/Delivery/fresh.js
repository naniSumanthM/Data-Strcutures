coordinates = [[1, 2], [3, 4], [1, -1]];
location_map = {};
sortable = [];

for (let i = 0; i < coordinates.length; i++) {
  let iSquare = Math.pow(coordinates[i][0], 2);
  let subArray = coordinates[i];
  for (let j = 0; j <= subArray.length; j++) {
    let jSquare = Math.pow(subArray[j + 1], 2);
    location_map[coordinates[i]] = Math.sqrt(iSquare + jSquare);
    break;
  }
}

for (let location in location_map) {
  sortable.push([location, location_map[location]]);
}

console.log(sortable.sort());
//Approach - O(n^2)
