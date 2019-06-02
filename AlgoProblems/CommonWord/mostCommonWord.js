let mostCommonWord = (input, bannedWords) => {
    let cleanWords = input.toLowerCase().match(/\b[\w']+\b/g)
    let nonBannedWords = []
    let map = new Map();

    //populate an array with only nonBannedWords
    for (let word of cleanWords) {
        if (!bannedWords.includes(word)) {
            nonBannedWords.push(word)
        }
    }

    //build a Map(), and increment value if already seen
    for (let notBannedWord of nonBannedWords) {
        if (!map.has(notBannedWord)) {
            map.set(notBannedWord, 1)
        }
        map.set(notBannedWord, map.get(notBannedWord) + 1)
    }
    //sort the map from greatest to least, and return the top most word which is the most frequent word which is not banned
    return Array.from(new Map([...map.entries()].sort((a, b) => b[1] - a[1])))[0][0]
}

console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.!", ['hit']));
//https://leetcode.com/discuss/interview-question/137448/Amazon-SDE2-Interview-Question
//https://stackoverflow.com/questions/49718279/javascript-remove-string-punctuation-and-split-into-words
//https://stackoverflow.com/questions/37982476/how-to-sort-a-map-by-value-in-javascript