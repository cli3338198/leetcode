/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    return reverse(reverse(num)) === num
    
    function reverse(num) {
        let res = 0
        while (num) {
            const digit = num % 10
            res *= 10
            res += digit
            num = Math.floor(num/10)
        }
        return res
    }
};

isSameAfterReversals = function(num) {
    if (num === 0) return true
    if (num % 10 === 0) return false
    return true
}