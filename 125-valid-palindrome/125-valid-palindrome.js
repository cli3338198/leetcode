/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^0-9a-zA-Z]/g,"")
    s = s.toLowerCase()
    let l = 0
    let r = s.length-1
    while (l < r) {
        if (s[l] !== s[r]) return false
        l++
        r--
    }
    return true
};