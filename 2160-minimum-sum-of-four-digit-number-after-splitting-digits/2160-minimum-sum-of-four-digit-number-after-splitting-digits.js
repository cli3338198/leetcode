/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    num = String(num).split("").map(Number).sort((a, b) => a - b)
    const [a, c, b, d] = num
    return Number("" + a + b) + Number("" + c + d)
};