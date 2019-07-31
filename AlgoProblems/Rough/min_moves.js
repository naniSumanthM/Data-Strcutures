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