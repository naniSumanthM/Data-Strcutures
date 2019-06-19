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
