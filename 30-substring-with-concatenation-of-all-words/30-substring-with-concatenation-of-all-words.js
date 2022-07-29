/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const n = words[0].length
    const map = words.reduce((acc, word) => ({...acc, [word]: acc[word] + 1 || 1}), {})
    const res = []
    for (let i=0; i < s.length; i++) {
        if (s.substring(i, i+n) in map) {
            const copy = JSON.parse(JSON.stringify(map))
            let j=i
            while (copy[s.substring(j, j+n)] > 0) {
                copy[s.substring(j, j+n)]--
                j += n
            }
            if (Object.values(copy).every(n => n === 0)) res.push(i)
        }
    }
    return res
};