/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    s = s.split("")
    let left = 0
    let right = s.length-1
    while (left < right) {
        if (s[left] !== s[right]) {
            if (s[left] < s[right]) {
                s[right] = s[left]
            } else {
                s[left] = s[right]
            }             
        }
        left++
        right--
    }
    return s.join("")
};