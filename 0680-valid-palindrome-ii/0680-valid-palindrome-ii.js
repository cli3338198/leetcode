/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let l = 0
    let r = s.length-1
    while (l < r) {
        if (s[l] !== s[r]) {
            const a = s.substring(l+1, r+1)
            const revA = Array(...a).reverse().join("")
            const b = s.substring(l, r)
            const revB = Array(...b).reverse().join("")
            return a === revA || b === revB
        }
        l++
        r--
    }
    return true
};