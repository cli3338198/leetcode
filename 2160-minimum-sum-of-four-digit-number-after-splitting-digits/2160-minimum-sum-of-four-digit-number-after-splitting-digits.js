/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const [a, c, b, d] = String(num).split("").map(Number).sort((a, b) => a - b)
    return Number("" + a + b) + Number("" + c + d)
};