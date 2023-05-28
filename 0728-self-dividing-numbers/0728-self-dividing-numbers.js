/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const res = []
    for (let i=left; i <= right; i++) {
        if (helper(i)) res.push(i)
    }
    return res
    
    function helper(n) {
        if (n % 10 === 0) return false
        const original = n
        while (n) {
            const digit = n % 10
            if (original % digit !== 0) return false
            n = Math.floor(n / 10)
        }
        return true
    }
};