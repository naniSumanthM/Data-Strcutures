let mostCommonWord = (input, bannedWords) => {
    let cleanWords = input.toLowerCase().match(/\b[\w']+\b/g)
    let map = new Map();

    for (let word of cleanWords) {
        if (!map.has(word)) {
            map.set(word, 1)
        }
        map.set(word, map.get(word) + 1)
    }
    return Array.from(new Map([...map.entries()].sort((a, b) => b[1] - a[1])));
}

console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.!", ['hit']));
//https://stackoverflow.com/questions/49718279/javascript-remove-string-punctuation-and-split-into-words
//https://stackoverflow.com/questions/37982476/how-to-sort-a-map-by-value-in-javascript