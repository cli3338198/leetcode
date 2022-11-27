/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    s = s.split("")
    for (let i=0; i < s.length; i += 2 * k) {
        let l = i
        let r = Math.min(i + k - 1, s.length-1)
        while (l < r) {
            [s[l], s[r]] = [s[r], s[l]]
            l++
            r--
        }
    }
    return s.join("")
};