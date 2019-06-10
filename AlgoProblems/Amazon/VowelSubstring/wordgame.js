// You are given with a string.Your task is to remove atmost two substrings of any length from the given string such that the remaining string contains vowels('a', 'e', 'i', 'o', 'u') only.Your aim is the maximise the length of the remaining string.Output the length of remaining string after removal of atmost two substrings.
// NOTE: The answer may be 0, i.e.removing the entire string.
// Sample Input
// earthproblem
// letsgosomewhere

// Sample Output
// 3
// 2

let removeConsonants = (str) => {
    let vowels = {
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true
    };
    let temp = {
        start: -1,
        finish: -1
    };
    let intervals = [];

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

// console.log(removeConsonants('letsgosomewhere'));

// removeConsonants('ffaoaoeffaaff'); // 5 or aoaoe
// removeConsonants('aoao'); // 4 or aoao
// removeConsonants('frfr'); // 0


let longestVowelSubstring = (input) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    let res = 0;
    for (let i = 0; i < input.length; i++) {
        if (vowels.includes(input[i].toLowerCase())) {
            count++
        } else {
            res = Math.max(res, count)
            count = 0;
        }
    }
    return res;
}

console.log(longestVowelSubstring('EARTH'));
