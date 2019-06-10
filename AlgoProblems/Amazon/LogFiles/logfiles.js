let reorderLogFiles = (logs) => {
    let letter = []
    let digit = [];
    for (let line of logs) {
        if (line.split(" ")[1].charAt(0) >= '0' && line.split(" ")[1].charAt(0) <= '9') {
            digit.push(line);
        } else {
            letter.push(line);
        }
    }
    letter.sort((a, b) => {
        return a.split(" ")[1].localeCompare(b.split(" ")[1]) || a.split(" ")[2].localeCompare(b.split(" ")[2])
    })
    return letter.concat(digit);
}


console.log(reorderLogFiles(["a1 9 2 3 1", "g1 act car", "zo4 4 7", "ab1 off key dog", "a8 act zoo"]));

// Example:
// Second, fourth, and fifth lines are the lines with words.According to the lexicographical order, the second line will  be re - ordered first in log file, then fifth, and fourth comes in the log file.Next, the lines with numbers come in order in whihc these lines were in the input.
//https://leetcode.com/problems/reorder-log-files/discuss/263532/Easy-to-understand-Javascript-Solution-Faster-than-98