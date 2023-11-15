/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false
    if (x < 10) return true
    if (x % 10 === 0) return false
    let copyX = x, reverseX = 0
    while (copyX) {
        reverseX *= 10
        reverseX += copyX % 10
        copyX = Math.floor(copyX / 10)
    }
    return reverseX === x
};