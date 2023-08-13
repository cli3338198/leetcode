/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let i = 0
    let numVowels = 0
    let res = 0
    for (let j=0; j < s.length; j++) {
        if ("aeiou".includes(s[j])) numVowels++
        if (j - i + 1 === k) {
            res = Math.max(res, numVowels)
            if ('aeiou'.includes(s[i])) numVowels--
            i++
        }
    }
    return res
};