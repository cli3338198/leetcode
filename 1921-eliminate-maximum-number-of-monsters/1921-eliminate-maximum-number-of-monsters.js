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
    let time = 0
    let killed = 0
    while (reachTime.length) {
        const curMonster = reachTime.shift()
        if (time >= curMonster) return killed
        killed++
        time++
    }
    return dist.length
};