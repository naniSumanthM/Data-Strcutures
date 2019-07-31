let kNumberOccurences = (array, k) => {
    let map = new Map();
    let output = [];

    for (num of array) {
        if (!map.has(num)) {
            map.set(num, 1)
        } else {
            map.set(num, map.get(num) + 1)
        }
    }
    for ([key, value] of map.entries()) {
        if (map.get(key) == k) {
            output.push(key);
        }
    }
    return output.sort((a, b) => a - b)
}
console.log(kNumberOccurences([3, 1, 4, 4, 5, 2, 6, 1], 2));