//https://leetcode.com/discuss/interview-question/269686/Amazon-Interview-Question-on-Strings
let firstReversedWord = (input) => {
    let words = input.toLowerCase().match(/\b[\w']+\b/g)
    let currentWord = ''
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 1) {
            currentWord = words[i].split('').reverse().join('')
        }
        for (let j = 0; j < words.length; j++) {
            if (currentWord == words[j + 1]) {
                return words[i]
            }
        }
    }
}
//console.log(firstReversedWord('I am ma a good student. I like doog interviewing a lot. Interviewing makes me happy. Being yppah'));

//https://leetcode.com/discuss/interview-question/205489/Amazon-Interview-Question-SDE-1
let minMoves = (input) => {
    let minIncrement = 0
    let previous = 0
    for (let i = 0; i < input.length; i++) {
        if (input[i] > previous) {
            minIncrement += input[i] - previous
        }
        previous = input[i]
    }
    return minIncrement
}
//console.log(minMoves([4, 2, 3, 1, 5, 2, 9]));

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
    return output.sort((a, b) => b - a)
}
//console.log(kNumberOccurences([3, 1, 4, 4, 5, 2, 6, 1], 2));

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
//console.log(distinctPairs([1, 3, 46, 1, 3, 9], 47));

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
//console.log(countingPairs([1, 1, 1, 2], 1));

let wholeMinuteDilema = () => {

}

console.log(wholeMinuteDilema());

