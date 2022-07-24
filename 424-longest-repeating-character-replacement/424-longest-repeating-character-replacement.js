/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const count = {}
    let l = 0
    let res = 0
    for (let r=0; r < s.length; r++) {
        count[s[r]] = count[s[r]] + 1 || 1
        const windowLen = r - l + 1
        const mostFrequent = Math.max(...Object.values(count))
        const curK = windowLen - mostFrequent
        if (curK <= k) {
            res = Math.max(res, windowLen)
        } else {
            count[s[l]]--
            l++
        }
    }
    return res
};