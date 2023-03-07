/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
var earliestFullBloom = function(plantTime, growTime) {
    const plants = plantTime.map((pT,i) => [pT, growTime[i]])
    plants.sort((a, b) => b[1] - a[1])
    let time = 0, res = 0
    for (const [pT, gT] of plants) {
        time += pT
        res = Math.max(res, time + gT)
    }
    return res
};