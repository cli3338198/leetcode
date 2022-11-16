/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    const freq = {}
    for (const c of s) {
        freq[c] = freq[c] + 1 || 1
    }
    let l = 0
    let res = 0
    let flag = true
    for (let r=0; r < s.length; r++) {
        if (freq[s[r]] < k) {
            res = Math.max(res, longestSubstring(s.substring(l, r), k))
            l = r + 1
            flag = false
        }
    }
    if (flag) {
        return s.length
    } else {
        return Math.max(res, longestSubstring(s.substring(l), k))
    }
};