let mostFrequest = (array, frequency) => {
  let numMap = {};
  let output = [];
  for (num of array) {
    if (numMap[num]) {
      numMap[num]++;
    } else {
      numMap[num] = 1;
    }
  }
  for (let key in numMap) {
    if (numMap[key] === frequency) {
      output.push(parseInt(key));
    }
  }
  return Math.max(...output); //Math.max.apply(null, output)
};

console.log(mostFrequest([3, 1, 4, 4, 5, 5, 2, 6, 1], 2));

//https://www.geeksforgeeks.org/find-k-numbers-occurrences-given-array/
//https://medium.com/front-end-weekly/es6-map-vs-object-what-and-when-b80621932373
// { id: 1, name: "test" }
// for (var key in obj) {
//     console.log(`key: ${key}, value: ${obj[key]}`);
//     //key: id, value: 1
//     //key: name, value: test
// }
