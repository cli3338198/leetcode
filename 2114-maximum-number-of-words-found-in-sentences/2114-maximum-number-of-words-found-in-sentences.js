/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let res = 0
    for (const sentence of sentences) {
        let cur = 0
        for (const c of sentence) {
            if (c === " ") cur++
        }
        res = Math.max(res, cur + 1)
    }
    return res
};

mostWordsFound = function(sentences) {
    return Math.max(...sentences.map(sentence => sentence.split(" ").length))
}