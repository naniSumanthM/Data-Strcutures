// coordinates = [[1, 2], [3, 4], [1, -1]];
// location_map = {};
// sortable = [];

// for (let i = 0; i < coordinates.length; i++) {
//   let iSquare = Math.pow(coordinates[i][0], 2);
//   let subArray = coordinates[i];
//   for (let j = 0; j <= subArray.length; j++) {
//     let jSquare = Math.pow(subArray[j + 1], 2);
//     location_map[coordinates[i]] = Math.sqrt(iSquare + jSquare);
//     break;
//   }
// }

// for (let location in location_map) {
//   if (sortable.length < 2) {
//     sortable.push([location]);
//   }
// }

// console.log(sortable);

//Approach - O(n^2)

let delivery = (numDestinations, coordinates, numDeliveries) => {
  let locationMap = new Map();

  for (let i = 0; i < coordinates.length; i++) {
    let xSquare = Math.pow(coordinates[i][0], 2);
    for (let j = 1; j < coordinates[i].length; j++) {
      let ySquare = Math.pow(coordinates[i][j], 2)
      locationMap.set(coordinates[i], Math.sqrt(xSquare + ySquare))
      break;
    }
  }
  //switch back into map, get top 2 keys and return
  return [...locationMap].sort()
}

console.log(delivery(3, [[1, 2], [3, 4], [1, -1]], 2));
