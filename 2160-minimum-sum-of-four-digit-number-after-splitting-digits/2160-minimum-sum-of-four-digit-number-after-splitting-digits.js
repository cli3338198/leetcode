/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const [a, b, c, d] = getDigits(num).sort((a, b) => a - b)
    return Number("" + a + c) + Number("" + b + d)
    
    function getDigits(num) {
        const res = []
        while (num) {
            res.push(num % 10)
            num = Math.floor(num / 10)
        }
        return res
    }
};