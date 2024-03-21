/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
    const years = Array(2051).fill(0)
    for (const [birth, death] of logs) {
        years[birth]++
        years[death]--
    }
    let cur = 0, max = 0, res = 0
    for (let year=1950; year <= 2050; year++) {
        cur += years[year]
        if (cur > max) {
            max = cur
            res = year
        }
    }
    return res
};