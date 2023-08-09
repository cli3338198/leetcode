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

maxScoreSightseeingPair = function(values) {
    let max = 0
    let pair1 = values[0]
    for (let i=1; i < values.length; i++) {
        const pair2 = values[i] - i
        const pairValue = pair1 + pair2
        max = Math.max(max, pairValue)
        pair1 = Math.max(pair1, values[i] + i)
    }
    return max
}