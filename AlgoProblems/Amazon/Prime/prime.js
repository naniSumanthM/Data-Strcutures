/// <summary>
/// You are working on developing a movie with Amazon Video and want to devise an application to easily break up individual shots 
/// (short sequence from a particular camera angle) in a video into scenes (a sequence of shots).  
/// Each shot is labeled with a letter. There is already an algorithm that breaks the video up into shots and labels them.
/// Write a function which will partition a sequence of shots into minimal subsequences 
/// so that no shot appears in more than one subsequence. The output should be the length of each subsequence.

/// Input
/// The input to the function/method consists of an argument - inputList, a list of characters representing the sequence of shots.
/// Output
/// Return a list of integers representing the length of each scene, in the order in which it appears in the given sequence of shots.
/// Example 1:
/// inputList = [a, b, c]
/// Output = [1, 1, 1]
/// Explanation:
/// Because there are no recurring shots, all shots can be in the minimal length 1 subsequence.
/// Example 2:
/// inputList  = [a, b, c, a]
/// Output = [4]
/// Explanation:
/// Because ‘a’ appears more than once, everything between the first and last appearance of ‘a’ must be in the same list.
/// Example 3:
/// inputList = [a, b, a, b, c, b, a, c, a, d, e, f, e, g, d, e, h, i, j, h, k, l, i, j]
/// Output = [9, 7, 8]
/// Test 1:
/// Input = [a, b, c, d, a, e, f, g, h, i, j, e]
/// Output = 5 7
/// Test 2:
/// [z, z, c, b, z, c, h, f, i, h, i]
/// Output = 6 5
/// </summary>

let getMovieShots = (input) => {
    let startIndex = 0;
    let lastIndex = 0;
    const arr = [];
    for (let i = 0; i < input.length; i++) {
        const currLast = input.lastIndexOf(input[i]);
        if (currLast > lastIndex) {
            lastIndex = currLast;
        }
        if (lastIndex === i) {
            arr.push(input.slice(startIndex, lastIndex + 1));
            startIndex = lastIndex + 1;
        }
    }
    return arr.map(a => a.length);
}

console.log(getMovieShots(["z", "z", "c", "b", "z", "c", "h", "f", "i", "h", "i"]));
