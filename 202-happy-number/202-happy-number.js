/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const set = new Set()
    while (n !== 1) {
        if (set.has(n)) return false
        set.add(n)
        n = sumOfSquareOfDigits(n)
    }
    return true
    
    function sumOfSquareOfDigits(n) {
        const res = []
        while (n) {
            const digit = n % 10
            res.push(digit)
            n = Math.floor(n / 10)
        }
        return res.reduce((acc, val) => acc + val**2, 0)
    }
};