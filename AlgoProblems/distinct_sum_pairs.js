let distinctPairs = (arr, target) => {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                if (!(map.has(arr[j]) && Array.from(map.values()).includes(arr[i]))) {
                    map.set(arr[i], arr[j]);
                }
            }
        }
    }
    return map.size;
}
console.log(distinctPairs([1, 3, 46, 1, 3, 9], 47));