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

let getMovieShots = (shots) => {
    let startMap = new Map();
    let endMap = new Map();
    let list = [];

    for (let i = 0; i < shots.length; i++) {
        if (!startMap.has(shots[i])) {
            startMap.set(shots[i], i)
            list.push(shots[i])
        } else {
            endMap.set(shots[i], i)
        }
    }

    for (let item of startMap) {
        let startIndex = startMap.get(item)

    }

}

//Then you can just use the list to compare
//If the start index of one element in the list is 
//larger than the largest end index of previous elements, you can get a partition here.


console.log(getMovieShots(["a", "b", "a", "b", "c", "b", "a", "c", "a", "d", "e", "f", "e", "g", "d", "e", "h", "i", "j", "h", "k", "l", "i", "j"]));