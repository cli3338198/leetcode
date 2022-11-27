/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let res = timeSeries.length * duration
    for (let i=1; i < timeSeries.length; i++) {
        res -= Math.max(0, duration - (timeSeries[i] - timeSeries[i-1]))
    }
    return res
};