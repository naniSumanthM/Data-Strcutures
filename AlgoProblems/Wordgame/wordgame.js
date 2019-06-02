// Question 2: Michelle has created a word game for her students.The word game begins with Michelle
// writing a string and a number, K, on the board.
// The students must find a substring of size K such that there is exactly one 
// character that is repeated one;
// in other words, there should be k - 1 distinct characters in the substring.

// Write an algorithm to help the students find the correct answer.If no such substring can be found, return an empty list;
// if multiple such substrings exist, return all them, without repetitions.The order in which the substrings are does not matter.

//     Input:
// The input to the function/method consists of two arguments - inputString, representing the string written by the teacher;
// num an integer representing the number, K, written by the teacher on the board.

//     Output:
// Return a list of all substrings of inputString with K characters, that have k - 1 distinct character i.e.
// exactly one character is repeated, or an empty list if no such substring exist in inputString.
// The order in which the substrings are returned does not matter.

//     Constraints:
// The input integer can only be greater than or equal to 0 and less than or equal to 26(0 <= num <= 26)
// The input string consists of only lowercase alphabetic characters.

//     Example
// Input:
// inputString = awaglk
// num = 4

// Output:
// [awag]

// Explanation:
// The substrings are { awag, wagl, aglk }
// The answer is awag as it has 3 distinct characters in a string of size 4, and only one character is repeated twice.


let removeConsonants = (str) => {
    let vowels = {
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true
    };
    let intervals = [];
    let temp = {
        start: -1,
        finish: -1
    };

    // split the string into the intervals by vowel delimeters
    for (let i = 0; i <= str.length; i++) {
        if (i == str.length || vowels[str[i]]) {
            // either vowel or the special end index
            if (temp.finish != -1) {
                intervals.push(temp);
            }
            temp = { start: -1, finish: -1 };
        } else {
            // update the current interval for consonants
            temp.start = temp.start != -1 ? temp.start : i;
            temp.finish = i;
        }
    }

    // special cases to remove 0 or 1 intervals
    if (intervals.length == 0) {
        return str.length;
    } else if (intervals.length == 1) {
        return str.length - (intervals[0].finish - intervals[0].start + 1);
    }

    // move the point between intervals, calculate its left and right ranges
    // find 2 ranges with the min sum
    let globalStart = intervals[0].start;
    let globalFinish = intervals[intervals.length - 1].finish;
    let minTwoIntervalsRange = Infinity;
    for (let i = 1; i < intervals.length; i++) {
        let leftFinish = intervals[i - 1].finish;
        let rightStart = intervals[i].start;
        let mergedLeft = leftFinish - globalStart + 1;
        let mergedRight = globalFinish - rightStart + 1;
        minTwoIntervalsRange = Math.min(mergedLeft + mergedRight, minTwoIntervalsRange);
    }
    return str.length - minTwoIntervalsRange;
}


console.log(removeConsonants('letsgosomewhere'));
