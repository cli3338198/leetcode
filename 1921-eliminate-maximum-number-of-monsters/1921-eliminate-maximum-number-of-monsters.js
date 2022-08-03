/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
    const reachTime = []
    for (let i=0; i < dist.length; i++) {
        reachTime[i] = dist[i] / speed[i]
    }
    reachTime.sort((a, b) => a - b)
    let killed = 0
    for (let time=0; time < reachTime.length; time++) {
        if (time >= reachTime[time]) return killed
        killed++
    }
    return dist.length
};