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

console.log(firstReversedWord('I am ma a good student. I like doog interviewing a lot. Interviewing makes me happy. Being yppah'));

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

console.log(minMoves([4, 2, 3, 1, 5, 2, 9]));
