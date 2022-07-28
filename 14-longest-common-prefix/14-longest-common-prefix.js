/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return ''
    let res = ''
    let idx = 0
    for (let char of strs[0]) {
        for (let i=1; i < strs.length; i++) {
            if (strs[i][idx] !== char) return res
        }
        res += char
        idx++
    }
    return res
};