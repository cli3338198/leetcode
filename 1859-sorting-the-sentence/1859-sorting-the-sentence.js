/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    s = s.split(" ")
    const res = Array(s.length)
    for (const word of s) {
        const w = word.substring(0, word.length-1)
        const idx = word[word.length-1]
        res[idx] = w
    }
    return res.join(" ").trim()
};

sortSentence = function(s) {
    return s
        .split(" ")
        .sort((a, b) => a.at(-1) - b.at(-1))
        .map(w => w.substring(0, w.length-1))
        .join(" ")
}