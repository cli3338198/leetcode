/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let l = 0
    let max = 0
    for (let r=0; r < s.length; r++) {
        while (s[l] !== s[r]) {
            l++
        }
        max = Math.max(r - l + 1, max)
    }
    return max
};