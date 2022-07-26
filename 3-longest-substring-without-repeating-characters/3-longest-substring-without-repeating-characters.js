/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = {}
    let l = 0
    let res = 0
    for (let r=0; r < s.length; r++) {
        map[s[r]] = map[s[r]] + 1 || 1
        while (map[s[r]] > 1) {
            map[s[l]]--
            l++
        }
        if (r - l + 1 > res) res = r - l + 1
    }
    return res
};