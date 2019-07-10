let countingPairs = (arr, target) => {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + target == arr[j]) {
                if (!(map.has(arr[j]) && Array.from(map.values()).includes(arr[i]))) {
                    map.set(arr[i], arr[j]);
                }
            }
        }
    }
    return map.size;
}
console.log(countingPairs([1, 1, 1, 2], 1));

