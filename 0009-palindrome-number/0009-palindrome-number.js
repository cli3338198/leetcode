/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if ((x < 0) || (x % 10 === 0 && x !== 0)) return false
    let y = 0
    while (x > y) {
        y = y * 10 + x % 10
        x = Math.floor(x / 10)
    }
    return x === y || Math.floor(y / 10) === x
};