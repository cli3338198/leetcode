/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let res = 0
    const original = num
    while (num !== 0) {
        const digit = num % 10
        if (original % digit === 0) res++
        num = Math.floor(num / 10)
    }
    return res
};