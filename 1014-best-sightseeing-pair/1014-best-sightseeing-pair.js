/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    let res = 0
    for (let j=0; j < values.length; j++) {
        for (let i=0; i < j; i++) {
            res = Math.max(res, values[i] + values[j] + i - j)
        }
    }
    return res
};