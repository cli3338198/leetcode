/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    const cnt = Array(26).fill(0).map(() => Array(words.length).fill(0))
    for (let i=0; i < words.length; i++) {
        for (let j=0; j < words[i].length; j++) {
            const idx = words[i][j].charCodeAt(0) - 97
            cnt[idx][i]++
        }
    }
    const res = []
    for (let i=0; i < cnt.length; i++) {
        const min = Math.min(...cnt[i])
        if (min > 0) {
            for (let j=0; j < min; j++) {
                res.push(String.fromCharCode(i + 97))
            }
        }
    }
    return res
};