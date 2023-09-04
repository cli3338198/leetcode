/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    const n = s.length
    let i = 0, curCost = 0, len = 0
    for (let j=0; j < n; j++) {
        curCost += Math.abs(s[j].charCodeAt(0) - t[j].charCodeAt(0))
        while (i <= j && curCost > maxCost) {
            curCost -= Math.abs(s[i].charCodeAt(0) - t[i].charCodeAt(0))
            i++
        }
        len = Math.max(len, j - i + 1)
    }
    return len
};