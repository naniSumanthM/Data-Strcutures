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
    return map;
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
//console.log(wholeMinuteDilema());

//(1, "abcd"), (2, "efgh"), (4, "mnop"), (5, "qrst"),6,7,8,9,10 (3, "ijkl")
//abcd
//efgh
//
//ijklmnop
//[{4, "mnop"}, {5, "qrst"}]
let data = (stream) => {
    let store = []
    let lastSeq = 0;


    while (stream != null) {
        if (stream.seqNum - 1 == lastSeq) {
            console.log([stream.seqNum, stream.data])
            lastSeq += 1

            while (store.includes(lastSeq + 1)) {
                console.log(store[strea.seqNum + 1], [stream.SeqNum, stream.data])
                lastSeq += 1
            }

        } else {
            store.push([stream.seqNum, stream.data]) //push 4 //push 5
        }
    }
}

let findPairs = (nums, k) => {
    let set = new Set();

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) == k) {
                if (nums[i] <= nums[j]) {
                    set.add(nums[i], nums[j])
                } else {
                    set.add(nums[j], nums[i])
                }
            }
        }
    }
    return set.size;
}
//console.log(findPairs([1, 3, 1, 5, 4], 1));

let singleNumber = (nums) => {
    let map = new Map();
    for (num of nums) {
        if (!map.has(num)) {
            map.set(num, 1)
        } else {
            map.set(num, map.get(num) + 1)
        }
    }

    for ([k, v] of map) {
        if (map.get(k) == 1) {
            return k
        }
    }
};
//console.log(singleNumber([4, 1, 2, 1, 2]));

let isPalindrome = (s) => {
    let strippedString = s.replace(/\W/g, '').toLowerCase()
    let reversedString = strippedString.split('').reverse().join('').toLowerCase()
    return strippedString == reversedString
};
//console.log(isPalindrome("A man, a plan, a canal: Panama"));

var commonChars = function (A) {
    let result = [];
    let firstWord = A[0];

    for (let i = 0; i < firstWord.length; i++) {
        let char = firstWord[i];
        let inAllWords = true;

        for (let j = 1; j < A.length; j++) {
            let word = A[j];

            if (!word.includes(char)) {
                inAllWords = false;
                break;
            }
        }

        if (inAllWords) {
            result.push(char);

            for (let j = 1; j < A.length; j++) {
                let word = A[j];
                let index = word.indexOf(char);

                word = word.substr(0, index) + word.substr(index + 1);
                A[j] = word;
            }
        }
    }

    return result;
};

// console.log(commonChars(["bella", "label", "roller"]))
// console.log(commonChars(["acabcddd", "bcbdbcbd", "baddbadb", "cbdddcac", "aacbcccd", "ccccddda", "cababaab", "addcaccd"]));

let checkPossibility = (nums) => {
    let c = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            c++
            if (c > 1) {
                return false
            }
            if (nums[i] <= nums[i - 2] && nums[i + 1] <= nums[i - 1]) {
                return false
            }
        }
    }
    return true;
};

